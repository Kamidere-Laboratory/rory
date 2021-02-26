import { Command } from '@tshio/command-bus';
import * as yup from 'yup';
import { BaseCommandPayload } from '../../../../shared/base-command';
import { MessageContent } from 'eris';

interface BooleanCommandPayload extends BaseCommandPayload {
  b?: boolean;
}

export const BOOLEAN_COMMAND_TYPE = 'boolean';

export class BooleanCommand
  implements Command<BaseCommandPayload<BooleanCommandPayload>> {
  public type: string = BOOLEAN_COMMAND_TYPE;

  static schema = yup.object({
    b: yup.boolean(),
  });

  static usage: MessageContent = {
    embed: {
      title: BOOLEAN_COMMAND_TYPE,
      description: `${BOOLEAN_COMMAND_TYPE} -b\n${BOOLEAN_COMMAND_TYPE} --b true\n${BOOLEAN_COMMAND_TYPE} --b false`,
    },
  };

  constructor(public payload: BaseCommandPayload<BooleanCommandPayload>) {}
}
