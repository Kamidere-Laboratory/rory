import { Message } from 'eris';

interface BaseArgs {
  help: boolean;
  h: boolean;
  additional: string[];
}

export interface BaseCommandPayload<T = BaseArgs> {
  args: T & BaseArgs;
  message: Message;
}
