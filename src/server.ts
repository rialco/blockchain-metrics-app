import messageBus from './bus/index.js';
import { BusController } from './controllers/BusController.js';

export class Server {
  private channels: string[];

  constructor(channels: string[]) {
    this.channels = channels;
  }

  listenForMessages() {
    const busController = new BusController();
    messageBus.bus.on('message', (channel, message) => {
      const { type = 'unknown', ...data } = JSON.parse(message);
      const payload = {
        channel: channel,
        data: data,
        type: type,
      };
      busController.run(payload);
    });
  }

  async start(): Promise<void> {
    await messageBus.init(this.channels);
    this.listenForMessages();
  }

  async stop(): Promise<void> {
    messageBus.stop(this.channels);
  }
}
