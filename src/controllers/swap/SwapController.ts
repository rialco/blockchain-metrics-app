import { logger } from '../../logger/index.js';
import { Controller, ControllerPayload } from '../Controller.js';
import { StoreSwapController } from './StoreSwapController.js';

export class SwapController implements Controller {
  private storeSwapController = new StoreSwapController();

  run(payload: ControllerPayload) {
    const instructionMap: Record<string, Controller> = {
      store: this.storeSwapController,
    };

    const swap = {
      senderAddress: payload.data.sender,
      amount0In: BigInt(payload.data.amount0In.hex),
      amount1In: BigInt(payload.data.amount1In.hex),
      amount0Out: BigInt(payload.data.amount0Out.hex),
      amount1Out: BigInt(payload.data.amount1Out.hex),
      toAddress: payload.data.to,
    };

    payload.data = swap;

    try {
      instructionMap[payload.type].run(payload);
    } catch (error) {
      logger.error(`Exception in swap controller >>>> ${error}`);
    }
  }
}
