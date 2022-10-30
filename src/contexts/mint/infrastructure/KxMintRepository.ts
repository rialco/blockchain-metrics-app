import { logger } from '../../../logger/index.js';
import knex from '../../shared/infrastructure/postgres/KxConfig.js';

export class KxMintRepository {
  static persistMint(data: Record<string, any>) {
    try {
      knex('mints').insert({
        sender_address: data.senderAddress,
        amount_0: data.amount0,
        amount_1: data.amount1,
      });
    } catch (error) {
      logger.error(
        'There was an error while trying to persist the new Mint.',
        error
      );
    }
  }
}
