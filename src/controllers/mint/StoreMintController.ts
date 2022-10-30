import { MintInteractor } from '../../contexts/mint/application/MintInteractor.js';
import { Controller } from '../Controller.js';

export class StoreMintController implements Controller {
  run(payload: Record<string, any>) {
    MintInteractor.saveNewMint(payload.data);
  }
}
