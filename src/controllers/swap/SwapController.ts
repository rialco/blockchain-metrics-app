import { Controller, ControllerPayload } from '../Controller.js';
import { StoreSwapController } from './StoreSwapController.js';

export class SwapController implements Controller {
  private storeSwapController = new StoreSwapController();

  run(payload: ControllerPayload) {
    const instructionMap: Record<string, Function> = {
      store: this.storeSwapController.run,
    };

    const swap = {
      senderAddress: payload.data.senderAddress,
      amount0In: payload.data.amount0In,
      amount1In: payload.data.amount1In,
      amount0Out: payload.data.amount0Out,
      amount1Out: payload.data.amount1Out,
      toAddress: payload.data.to,
    };

    payload.data = swap;

    instructionMap[payload.type](payload);
  }
}
