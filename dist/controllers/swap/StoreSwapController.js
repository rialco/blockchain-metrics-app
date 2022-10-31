"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSwapController = void 0;
const SwapInteractor_js_1 = require("../../contexts/swap/application/SwapInteractor.js");
class StoreSwapController {
    run(payload) {
        SwapInteractor_js_1.SwapInteractor.saveNewSwap(payload.data);
    }
}
exports.StoreSwapController = StoreSwapController;
