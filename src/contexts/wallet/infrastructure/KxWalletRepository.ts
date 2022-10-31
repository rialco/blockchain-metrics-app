import { logger } from '../../../logger/index.js';
import knex from '../../shared/infrastructure/postgres/KxConfig.js';

export class KxWalletRepository {
  static async persistWallet(data: Record<string, any>) {
    try {
      await knex('wallets').insert({
        address: data.address,
      });
    } catch (error) {
      logger.error(
        `There was an error while trying to persist the new Wallet >>>> ${error}`
      );
    }
  }
}
