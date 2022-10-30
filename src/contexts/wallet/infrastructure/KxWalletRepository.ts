import { logger } from '../../../logger/index.js';
import knex from '../../shared/infrastructure/postgres/KxConfig.js';

export class KxWalletRepository {
  static persistWallet(data: Record<string, any>) {
    try {
      knex('wallets').insert({
        address: data.address,
      });
    } catch (error) {
      logger.error(
        'There was an error while trying to persist the new Wallet.',
        error
      );
    }
  }
}
