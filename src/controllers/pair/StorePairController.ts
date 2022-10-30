import { PairInteractor } from '../../contexts/pair/application/PairInteractor.js';
import { Controller } from '../Controller.js';

export class StorePairController implements Controller {
  run(payload: Record<string, any>) {
    PairInteractor.saveNewPair(payload.data);
  }
}
