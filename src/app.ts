import { Server } from './server.js';

const CHANNELS = ['pairs', 'swaps'];

export class App {
  private server?: Server;

  async start() {
    this.server = new Server(CHANNELS);
    this.server.start();
  }

  async stop() {
    if (this.server) {
      return this.server.stop();
    }
  }
}
