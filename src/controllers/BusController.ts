import { logger } from '../logger/index.js';
import { BurnController } from './burn/BurnController.js';
import { Controller, ControllerPayload } from './Controller.js';
import { MintController } from './mint/MintController.js';
import { PairController } from './pair/PairController.js';
import { SwapController } from './swap/SwapController.js';

export class BusController implements Controller {
  private pairController = new PairController();
  private swapController = new SwapController();
  private mintController = new MintController();
  private burnController = new BurnController();

  run(payload: ControllerPayload) {
    if (payload.type === 'unknown') {
      logger.error(
        'No type specified in message. Not able to assign a controller.'
      );
      return;
    }

    const controllerMap: Record<string, Function> = {
      pairs: this.pairController.run,
      swaps: this.swapController.run,
      mints: this.mintController.run,
      burns: this.burnController.run,
    };

    if (controllerMap[payload.channel]) {
      controllerMap[payload.channel](payload);
    }
  }
}
