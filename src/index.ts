import { createContainer } from './container';
(async () => {
  const container = await createContainer();
  const logger = container.cradle.logger;

  process.on('uncaughtException', (err) => {
    logger.error(`Uncaught: ${err.toString()}`, err);
    process.exit(1);
  });

  process.on('unhandledRejection', (err) => {
    if (err) {
      logger.error(`Unhandled: ${err.toString()}`, err);
    }
    process.exit(1);
  });

  const client = container.cradle.discordClient;
  await Promise.all(
    container.cradle.discordIoEvents.map((event) => event.register())
  );

  client.connect();
})();
