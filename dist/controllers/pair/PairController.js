"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairController = void 0;
const StorePairController_js_1 = require("./StorePairController.js");
class PairController {
    constructor() {
        this.storePairController = new StorePairController_js_1.StorePairController();
    }
    run(payload) {
        const instructionMap = {
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
exports.PairController = PairController;
