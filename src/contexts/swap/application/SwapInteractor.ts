import { KxWalletRepository } from '../../wallet/infrastructure/KxWalletRepository.js';
import { KxSwapRepository } from '../infrastructure/KxSwapRepository.js';

export class SwapInteractor {
  static async saveNewSwap(data: Record<string, any>) {
    await KxWalletRepository.persistWallet({ address: data.toAddress });
    await KxSwapRepository.persistSwap(data);
  }
}
