import { Message } from 'eris';
import { DiStructure } from '../../../container/di-structure';
import { BaseEventIo } from '../shared/base-event.io';

type MessageDiscordEventIODeps = Pick<DiStructure, 'discordClient'>;
export class MessageDiscordEventIO implements BaseEventIo {
  constructor(private readonly deps: MessageDiscordEventIODeps) {}

  async register() {
    const { discordClient } = this.deps;
    discordClient.on('message', this.handler.bind(this));
  }

  async unregister() {
    const { discordClient } = this.deps;
    discordClient.off('message', this.handler.bind(this));
  }

  async handler(message: Message) {
    console.log(message);
  }
}
