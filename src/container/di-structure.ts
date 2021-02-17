import type { Client } from 'eris';
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
  discord: {
    client: Client;
  };
}
