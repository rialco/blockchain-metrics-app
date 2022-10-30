import { logger } from '../../../logger/index.js';
import knex from '../../shared/infrastructure/postgres/KxConfig.js';

export class KxPairRepository {
  static persistPair(data: Record<string, any>) {
    try {
      knex('pairs').insert({
        token_0_address: data.token0Address,
        token_1_address: data.token1Adress,
        pair_address: data.pairAddress,
      });
    } catch (error) {
      logger.error(
        'There was an error while trying to persist the new Pair.',
        error
      );
    }
  }
}
