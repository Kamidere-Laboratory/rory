import { asArray } from '@tshio/awilix-resolver';
import { asClass, asValue, AwilixContainer } from 'awilix';
import { Client } from 'eris';
import { MessageDiscordEventIO } from '../modules/discord/io/message-discord-event.io';
import { ReadyDiscordEventIO } from '../modules/discord/io/ready-discord-event.io';
import type { BaseEventIo } from '../modules/discord/shared/base-event.io';
import type { DiStructure } from './di-structure';

export const registerDiscord = async (
  container: AwilixContainer<DiStructure>
) => {
  const discordClient = new Client(container.cradle.discordConfig.token);

  container.register({
    discordClient: asValue(discordClient),
    discordIoEvents: asArray<BaseEventIo>([
      asClass(ReadyDiscordEventIO).singleton().scoped(),
      asClass(MessageDiscordEventIO).singleton().scoped(),
    ]),
  });

  return container;
};
