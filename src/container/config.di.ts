import { asValue, AwilixContainer } from 'awilix';

export const registerConfig = async (container: AwilixContainer) => {
  const configScope = container.createScope();
  const discordScope = configScope.createScope();

  discordScope.register({
    token: asValue(process.env.DISCORD_TOKEN),
    prefix: asValue(process.env.DISCORD_PREFIX),
  });

  configScope.register({
    discord: asValue(discordScope.cradle),
    env: asValue(process.env.NODE_ENV),
  });

  container.register({
    discordConfig: asValue(discordScope.cradle),
    env: asValue(process.env.NODE_ENV),
    config: asValue(configScope.cradle),
  });

  return container;
};
