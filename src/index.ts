import { createContainer } from './container';
(async () => {
  const container = await createContainer();
  const client = container.cradle.discordClient;

  client.on('messageCreate', (message) => {
    console.log(message);
  });

  container.cradle.discordIoEvents.forEach((event) => {
    void event.register();
  });

  client.connect();
})();
