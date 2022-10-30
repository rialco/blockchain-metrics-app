import { WalletInteractor } from '../../contexts/wallet/application/WalletInteractor.js';
import { Controller } from '../Controller.js';

export class StoreWalletController implements Controller {
  run(payload: Record<string, any>) {
    WalletInteractor.saveNewWallet(payload.data);
  }
}
