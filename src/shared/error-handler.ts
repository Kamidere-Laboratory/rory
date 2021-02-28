import { CommandNotSupportedError } from '@tshio/command-bus';
import { DiStructure } from '../container/di-structure';
import { MissingCommandError } from '../modules/discord/errors/missing-command.error';

type ErrorHandlerDeps = Pick<DiStructure, 'logger'>;
export const errorHandler = ({ logger }: ErrorHandlerDeps) => (
  error: Error
) => {
  if (error instanceof CommandNotSupportedError) {
    return logger.debug(error);
  }
  if (error instanceof MissingCommandError) {
    return logger.debug(error);
  }

  throw error;
};
