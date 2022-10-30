import { SwapInteractor } from '../../contexts/swap/application/SwapInteractor.js';
import { Controller } from '../Controller.js';

export class StoreSwapController implements Controller {
  run(payload: Record<string, any>) {
    SwapInteractor.saveNewSwap(payload.data);
  }
}
