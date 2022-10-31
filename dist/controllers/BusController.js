"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusController = void 0;
const index_js_1 = require("../logger/index.js");
const BurnController_js_1 = require("./burn/BurnController.js");
const MintController_js_1 = require("./mint/MintController.js");
const PairController_js_1 = require("./pair/PairController.js");
const SwapController_js_1 = require("./swap/SwapController.js");
const pairController = new PairController_js_1.PairController();
const swapController = new SwapController_js_1.SwapController();
const mintController = new MintController_js_1.MintController();
const burnController = new BurnController_js_1.BurnController();
class BusController {
    run(payload) {
        if (payload.type === 'unknown') {
            index_js_1.logger.error('No type specified in message. Not able to assign a controller.');
            return;
        }
        const controllerMap = {
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
            }
            catch (error) {
                index_js_1.logger.error(`Exception in bus >>>> ${error}`);
            }
        }
    }
}
exports.BusController = BusController;
