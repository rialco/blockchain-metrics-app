"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapController = void 0;
const index_js_1 = require("../../logger/index.js");
const StoreSwapController_js_1 = require("./StoreSwapController.js");
class SwapController {
    constructor() {
        this.storeSwapController = new StoreSwapController_js_1.StoreSwapController();
    }
    run(payload) {
        const instructionMap = {
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
        }
        catch (error) {
            index_js_1.logger.error(`Exception in swap controller >>>> ${error}`);
        }
    }
}
exports.SwapController = SwapController;
