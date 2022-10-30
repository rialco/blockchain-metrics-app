import Redis from 'ioredis';
import { logger } from '../logger';
import { IBus } from './types.js';

class Bus {
  readonly bus;
  constructor(bus: IBus) {
    this.bus = bus;
  }

  async init(channels: string[]): Promise<void> {
    try {
      await this.bus.subscribe(...channels, (err, count) => {
        if (err) {
          logger.error('Failed to subscribe.', err.message);
          return;
        }

        logger.info(
          `Subscribed successfully. This client is currently subscribed to ${count} channels.`
        );
      });
    } catch (error) {
      logger.error(error);
    }
  }

  stop(channels: string[]) {
    try {
      this.bus.unsubscribe(...channels, (err, count) => {
        if (err) {
          logger.error('Failed to unsubscribe.', err.message);
          return;
        }

        logger.info(
          `Unsubscribed successfully. This client unsubscribed to ${count} channels.`
        );
      });
    } catch (error) {}
  }
}

export default new Bus(
  new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    db: 0,
  })
);
