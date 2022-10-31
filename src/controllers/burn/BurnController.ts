import { Controller, ControllerPayload } from '../Controller.js';
import { StoreBurnController } from './StoreBurnController.js';

export class BurnController implements Controller {
  private storeMintController = new StoreBurnController();

  run(payload: ControllerPayload) {
    const instructionMap: Record<string, Controller> = {
      store: this.storeMintController,
    };

    const burn = {
      senderAddress: payload.data.sender,
      amount0: payload.data.amount0,
      amount1: payload.data.amount1,
      toAddress: payload.data.to,
    };

    payload.data = burn;

    instructionMap[payload.type].run(payload);
  }
}
