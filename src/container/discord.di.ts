import { asValue, AwilixContainer } from 'awilix';
import eris from 'eris';
import { DiStructure } from './di-structure';

export const registerDiscord = async (
  container: AwilixContainer<DiStructure>
) => {
  const discordScope = container.createScope<DiStructure['discord']>();

  const discordClient = eris(container.cradle.discordConfig.token);

  discordScope.register({
    client: asValue(discordClient),
  });

  container.register({
    discord: asValue(discordScope.cradle),
  });

  return container;
};
