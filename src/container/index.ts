import * as awilix from 'awilix';
import { registerConfig } from './config.di';
import type { DiStructure } from './di-structure';
import { registerDiscord } from './discord.di';

export const createContainer = async () => {
  const container = awilix.createContainer<DiStructure>();

  await registerConfig(container);
  await registerDiscord(container);

  return container;
};
