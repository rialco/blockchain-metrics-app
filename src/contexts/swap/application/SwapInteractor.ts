import { KxSwapRepository } from '../infrastructure/KxSwapRepository.js';

export class SwapInteractor {
  static saveNewSwap(payload: Record<string, any>) {
    KxSwapRepository.persistSwap(payload.data);
  }
}
