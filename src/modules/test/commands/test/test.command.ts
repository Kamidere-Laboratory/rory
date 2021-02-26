import { Command } from '@tshio/command-bus';
import { BaseCommandPayload } from '../../../../shared/base-command';

export const TEST_COMMAND_TYPE = 'test';

export class TestCommand implements Command<BaseCommandPayload> {
  public type: string = TEST_COMMAND_TYPE;

  constructor(public payload: BaseCommandPayload) {}
}
