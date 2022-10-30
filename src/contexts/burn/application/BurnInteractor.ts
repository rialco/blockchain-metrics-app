import { KxBurnRepository } from '../infrastructure/KxBurnRepository.js';

export class BurnInteractor {
  static saveNewBurn(payload: Record<string, any>) {
    KxBurnRepository.persistBurn(payload.data);
  }
}
