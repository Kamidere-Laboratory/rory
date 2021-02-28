import { DiStructure } from '../../../container/di-structure';
import { BaseEventIo } from '../shared/base-event.io';

type ReadyDiscordEventIODeps = Pick<DiStructure, 'discordClient' | 'logger'>;
export class ReadyDiscordEventIO implements BaseEventIo {
  constructor(private readonly deps: ReadyDiscordEventIODeps) {}

  async register() {
    const { discordClient } = this.deps;
    discordClient.on('ready', this.handler.bind(this));
  }

  async unregister() {
    const { discordClient } = this.deps;
    discordClient.off('ready', this.handler.bind(this));
  }

  async handler() {
    const { logger } = this.deps;
    logger.info('Bot started!');
  }
}
