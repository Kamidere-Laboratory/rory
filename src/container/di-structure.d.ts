import type { Client } from 'eris';
import type { BaseEventIo } from '../modules/discord/shared/base-event.io';
import type { createLogger } from '@tshio/logger';
import type { CommandBus } from '@tshio/command-bus';
import { errorHandler } from '../shared/error-handler';
export interface DiDiscordConfig {
  token: string;
  prefix: string;
}

export interface DiStructure {
  config: {
    discord: DiDiscordConfig;
    env: string;
  };
  env: string;
  discordConfig: DiDiscordConfig;
  discordIoEvents: BaseEventIo[];
  discordClient: Client;
  logger: ReturnType<typeof createLogger>;
  commandBus: CommandBus;
  commandHandlers: CommandHandler[];
  errorHandler: ReturnType<typeof errorHandler>;
}
