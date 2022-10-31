import { KxWalletRepository } from '../../wallet/infrastructure/KxWalletRepository.js';
import { KxMintRepository } from '../infrastructure/KxMintRepository.js';

export class MintInteractor {
  static async saveNewMint(data: Record<string, any>) {
    await KxWalletRepository.persistWallet({ address: data.senderAddress });
    await KxMintRepository.persistMint(data);
  }
}
