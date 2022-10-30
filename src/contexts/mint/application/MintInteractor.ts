import { KxMintRepository } from '../infrastructure/KxMintRepository.js';

export class MintInteractor {
  static saveNewMint(payload: Record<string, any>) {
    KxMintRepository.persistMint(payload.data);
  }
}
