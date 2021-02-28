import { CommandHandler } from '@tshio/command-bus';
import { BooleanCommand, BOOLEAN_COMMAND_TYPE } from './boolean.command';

export class BooleanCommandHandler implements CommandHandler<BooleanCommand> {
  public commandType: string = BOOLEAN_COMMAND_TYPE;

  async execute({ payload: { args, message } }: BooleanCommand) {
    if (args.h || args.help) {
      return message.channel.createMessage(BooleanCommand.usage);
    }

    try {
      await BooleanCommand.schema.validate(args, { abortEarly: false });
    } catch (error) {
      return message.channel.createMessage(BooleanCommand.usage);
    }

    return message.channel.createMessage(
      `:thumbup:, args: ${JSON.stringify(args, undefined, 2)}`
    );
  }
}
