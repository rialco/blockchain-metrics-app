"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorePairController = void 0;
const PairInteractor_js_1 = require("../../contexts/pair/application/PairInteractor.js");
class StorePairController {
    run(payload) {
        PairInteractor_js_1.PairInteractor.saveNewPair(payload.data);
    }
}
exports.StorePairController = StorePairController;
