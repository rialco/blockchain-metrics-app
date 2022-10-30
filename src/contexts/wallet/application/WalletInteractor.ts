import { KxWalletRepository } from '../infrastructure/KxWalletRepository.js';

export class WalletInteractor {
  static saveNewWallet(payload: Record<string, any>) {
    KxWalletRepository.persistWallet(payload.data);
  }
}
