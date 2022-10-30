import { BurnInteractor } from '../../contexts/burn/application/BurnInteractor.js';
import { Controller } from '../Controller.js';

export class StoreBurnController implements Controller {
  run(payload: Record<string, any>) {
    BurnInteractor.saveNewBurn(payload.data);
  }
}
