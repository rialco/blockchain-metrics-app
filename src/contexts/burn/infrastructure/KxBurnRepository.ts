import { logger } from '../../../logger/index.js';
import knex from '../../shared/infrastructure/postgres/KxConfig.js';

export class KxBurnRepository {
  static persistBurn(data: Record<string, any>) {
    try {
      knex('burns').insert({
        sender_address: data.senderAddress,
        amount_0: data.amount0,
        amount_1: data.amount1,
        to_address: data.toAddress,
      });
    } catch (error) {
      logger.error(
        'There was an error while trying to persist the new Mint.',
        error
      );
    }
  }
}
