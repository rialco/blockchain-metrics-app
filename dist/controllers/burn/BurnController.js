"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurnController = void 0;
const StoreBurnController_js_1 = require("./StoreBurnController.js");
class BurnController {
    constructor() {
        this.storeMintController = new StoreBurnController_js_1.StoreBurnController();
    }
    run(payload) {
        const instructionMap = {
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
exports.BurnController = BurnController;
