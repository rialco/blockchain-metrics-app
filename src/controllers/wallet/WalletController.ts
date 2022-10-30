import { Controller, ControllerPayload } from '../Controller.js';
import { StoreWalletController } from './StoreWalletController.js';

export class WalletController implements Controller {
  run(payload: ControllerPayload) {
    const storeWalletController = new StoreWalletController();

    const instructionMap: Record<string, Function> = {
      store: storeWalletController.run,
    };

    const wallet = {
      address: payload.data.address,
    };

    payload.data = wallet;

    instructionMap[payload.type](payload);
  }
}
