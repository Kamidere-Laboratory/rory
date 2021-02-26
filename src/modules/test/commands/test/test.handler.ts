import { CommandHandler } from '@tshio/command-bus';
import { TestCommand, TEST_COMMAND_TYPE } from './test.command';

export class TestCommandHandler implements CommandHandler<TestCommand> {
  public commandType: string = TEST_COMMAND_TYPE;

  async execute({ payload: { args, message } }: TestCommand) {
    return message.channel.createMessage(
      `:thumbup:, args: ${JSON.stringify(args, undefined, 2)}`
    );
  }
}
