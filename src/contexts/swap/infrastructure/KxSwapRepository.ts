import { logger } from '../../../logger/index.js';
import knex from '../../shared/infrastructure/postgres/KxConfig.js';

export class KxSwapRepository {
  static persistSwap(data: Record<string, any>) {
    try {
      knex('swaps').insert({
        sender_address: data.senderAddress,
        amount_0_in: data.amount0In,
        amount_1_in: data.amount1In,
        amount_0_out: data.amount0Out,
        amount_1_out: data.amount1Out,
        to_address: data.toAddress,
      });
    } catch (error) {
      logger.error(
        'There was an error while trying to persist the new Swap.',
        error
      );
    }
  }
}
