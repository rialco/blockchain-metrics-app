import { KxPairRepository } from '../infrastructure/KxPairRepository.js';

export class PairInteractor {
  static saveNewPair(payload: Record<string, any>) {
    KxPairRepository.persistPair(payload.data);
  }
}
