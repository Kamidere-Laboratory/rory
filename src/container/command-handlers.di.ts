import { asArray } from '@tshio/awilix-resolver';
import { AwilixContainer } from 'awilix';
import { testCommandHandlers } from '../modules/test/registry';
import type { DiStructure } from './di-structure';

export const registerCommandsHandlers = async (
  container: AwilixContainer<DiStructure>
) => {
  container.register({
    commandHandlers: asArray<any>([...testCommandHandlers]),
  });

  return container;
};
