"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreBurnController = void 0;
const BurnInteractor_js_1 = require("../../contexts/burn/application/BurnInteractor.js");
class StoreBurnController {
    run(payload) {
        BurnInteractor_js_1.BurnInteractor.saveNewBurn(payload.data);
    }
}
exports.StoreBurnController = StoreBurnController;
