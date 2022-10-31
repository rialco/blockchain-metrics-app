import { Controller, ControllerPayload } from '../Controller.js';
import { StoreMintController } from './StoreMintController.js';

export class MintController implements Controller {
  private storeMintController = new StoreMintController();

  run(payload: ControllerPayload) {
    const instructionMap: Record<string, Controller> = {
      store: this.storeMintController,
    };

    const mint = {
      senderAddress: payload.data.sender,
      amount0: payload.data.amount0,
      amount1: payload.data.amount1,
    };

    payload.data = mint;

    instructionMap[payload.type].run(payload);
  }
}
