import { Controller, ControllerPayload } from '../Controller.js';
import { StorePairController } from './StorePairController.js';

export class PairController implements Controller {
  private storePairController = new StorePairController();

  run(payload: ControllerPayload) {
    const instructionMap: Record<string, Function> = {
      store: this.storePairController.run,
    };

    const pair = {
      token0Address: payload.data.token0Address,
      token1Adress: payload.data.token1Adress,
      pairAddress: payload.data.pairAddress,
    };

    payload.data = pair;

    instructionMap[payload.type](payload);
  }
}
