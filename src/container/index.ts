import * as awilix from 'awilix';
import { createLogger } from '@tshio/logger';
import { registerConfig } from './config.di';
import type { DiStructure } from './di-structure';
import { registerDiscord } from './discord.di';
import { asClass, asFunction, asValue } from 'awilix';
import { CommandBus } from '@tshio/command-bus';
import { registerCommandsHandlers } from './command-handlers.di';
import { errorHandler } from '../shared/error-handler';

export const createContainer = async () => {
  const container = awilix.createContainer<DiStructure>();

  const logger = createLogger();

  container.register({
    logger: asValue(logger),
    commandBus: asClass(CommandBus).classic().singleton(),
    errorHandler: asFunction(errorHandler),
  });

  await registerCommandsHandlers(container);
  await registerConfig(container);
  await registerDiscord(container);

  return container;
};
