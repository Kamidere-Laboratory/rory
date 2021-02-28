import { asValue, AwilixContainer } from 'awilix';
import type { DiStructure } from './di-structure';

export const registerConfig = async (
  container: AwilixContainer<DiStructure>
) => {
  const configScope = container.createScope<DiStructure['config']>();
  const discordScope = configScope.createScope<DiStructure['discordConfig']>();

  discordScope.register({
    token: asValue(process.env.DISCORD_TOKEN ?? ''),
    prefix: asValue(process.env.DISCORD_PREFIX ?? './'),
  });

  configScope.register({
    discord: asValue(discordScope.cradle),
    env: asValue(process.env.NODE_ENV ?? 'development'),
  });

  container.register({
    discordConfig: asValue(discordScope.cradle),
    env: asValue(configScope.cradle.env),
    config: asValue(configScope.cradle),
  });

  return container;
};
