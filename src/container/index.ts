import * as awilix from 'awilix';
import { registerConfig } from './config.di';
import { DiStructure } from './di-structure';

export const createContainer = async () => {
  const container = awilix.createContainer<DiStructure>();

  await registerConfig(container);

  return container;
};
