import { logger } from '../logger/index.js';
import { BurnController } from './burn/BurnController.js';
import { Controller, ControllerPayload } from './Controller.js';
import { MintController } from './mint/MintController.js';
import { PairController } from './pair/PairController.js';
import { SwapController } from './swap/SwapController.js';

const pairController = new PairController();
const swapController = new SwapController();
const mintController = new MintController();
const burnController = new BurnController();

export class BusController implements Controller {
  run(payload: ControllerPayload) {
    if (payload.type === 'unknown') {
      logger.error(
        'No type specified in message. Not able to assign a controller.'
      );
      return;
    }

    const controllerMap: Record<string, Controller> = {
      pairs: pairController,
      swaps: swapController,
      mints: mintController,
      burns: burnController,
    };

    if (controllerMap[payload.channel]) {
      try {
        console.log(payload.channel);
        console.log(controllerMap[payload.channel]);
        controllerMap[payload.channel].run(payload);
      } catch (error) {
        logger.error(`Exception in bus >>>> ${error}`);
      }
    }
  }
}
