import type { Client } from 'eris';
import type { BaseEventIo } from '../modules/discord/shared/base-event.io';
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
}
