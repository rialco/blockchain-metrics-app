"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintController = void 0;
const StoreMintController_js_1 = require("./StoreMintController.js");
class MintController {
    constructor() {
        this.storeMintController = new StoreMintController_js_1.StoreMintController();
    }
    run(payload) {
        const instructionMap = {
            store: this.storeMintController,
        };
        const mint = {
            senderAddress: payload.data.sender,
            amount0: payload.data.amount0,
            amount1: payload.data.amount1,
        };
        payload.data = mint;
        instructionMap[payload.type].run(payload);
    }
}
exports.MintController = MintController;
