"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const logger_1 = require("../logger");
class Bus {
    constructor(bus) {
        this.bus = bus;
    }
    async init(channels) {
        try {
            await this.bus.subscribe(...channels, (err, count) => {
                if (err) {
                    logger_1.logger.error('Failed to subscribe.', err.message);
                    return;
                }
                logger_1.logger.info(`Subscribed successfully. This client is currently subscribed to ${count} channels.`);
            });
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
    stop(channels) {
        try {
            this.bus.unsubscribe(...channels, (err, count) => {
                if (err) {
                    logger_1.logger.error('Failed to unsubscribe.', err.message);
                    return;
                }
                logger_1.logger.info(`Unsubscribed successfully. This client unsubscribed to ${count} channels.`);
            });
        }
        catch (error) { }
    }
}
exports.default = new Bus(new ioredis_1.default({
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    db: 0,
}));
