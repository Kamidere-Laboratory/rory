import { asClass } from 'awilix';
import { BooleanCommandHandler } from './commands/boolean/boolean.handler';
import { TestCommandHandler } from './commands/test/test.handler';

export const testCommandHandlers = [
  asClass(TestCommandHandler),
  asClass(BooleanCommandHandler),
];
