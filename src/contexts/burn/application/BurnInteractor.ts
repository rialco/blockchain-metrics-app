import { KxWalletRepository } from '../../wallet/infrastructure/KxWalletRepository.js';
import { KxBurnRepository } from '../infrastructure/KxBurnRepository.js';

export class BurnInteractor {
  static async saveNewBurn(data: Record<string, any>) {
    await KxWalletRepository.persistWallet({ address: data.toAddress });
    await KxBurnRepository.persistBurn(data);
  }
}
