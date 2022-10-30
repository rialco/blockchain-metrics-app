import { App } from './app.js';
import { logger } from './logger/index.js';
import dotenv from 'dotenv';

dotenv.config();

try {
  new App().start();
} catch (error) {
  logger.error('App didnt start');
  process.exit(1);
}

process.on('uncaughtException', (err) => {
  logger.error('uncaught exception ', err);
  process.exit(1);
});
