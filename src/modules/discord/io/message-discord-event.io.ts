import { Message } from 'eris';
import { args as argsParser } from '@kamidere/node-args';
import { DiStructure } from '../../../container/di-structure';
import { BaseEventIo } from '../shared/base-event.io';
import { MessageType } from '../shared/enums/message-type.enum';
import { MissingCommandError } from '../errors/missing-command.error';

type MessageDiscordEventIODeps = Pick<
  DiStructure,
  'discordClient' | 'logger' | 'commandBus' | 'discordConfig' | 'errorHandler'
>;
export class MessageDiscordEventIO implements BaseEventIo {
  constructor(private readonly deps: MessageDiscordEventIODeps) {}

  private eventListener = (message: Message) =>
    void this.handler(message).catch(this.deps.errorHandler);

  async register() {
    const { discordClient } = this.deps;
    discordClient.on('messageCreate', this.eventListener.bind(this));
  }

  async unregister() {
    const { discordClient } = this.deps;
    discordClient.off('messageCreate', this.eventListener.bind(this));
  }

  async handler(message: Message) {
    const { logger, commandBus } = this.deps;

    if (!this.isValid(message)) return;
    const command = await this.getCommandTypeFromMessageContent(
      message.content
    );
    const args = argsParser(message.content.split(' '));
    logger.info({
      user: message.author.username,
      content: message.content,
      command,
      args,
      isValid: this.isValid(message),
      type: MessageType[message.type],
    });

    return commandBus.execute({
      type: command,
      payload: { message, args },
    });
  }

  private isValid(message: Message) {
    const { discordConfig } = this.deps;
    const isBot = message.author.bot;
    const isValidMessageType =
      message.type === MessageType.DEFAULT ||
      message.type === MessageType.REPLY;
    const isPrefixed =
      message.content.substr(0, discordConfig.prefix.length) ===
      discordConfig.prefix;

    return !isBot && isValidMessageType && isPrefixed;
  }

  private async getCommandTypeFromMessageContent(messageContent: string) {
    const { discordConfig } = this.deps;
    const messageContentWithoutPrefix = messageContent.substring(
      discordConfig.prefix.length
    );

    const command = messageContentWithoutPrefix.split(' ', 1)[0];

    if (!command) {
      throw new MissingCommandError(messageContent);
    }

    return command;
  }
}
