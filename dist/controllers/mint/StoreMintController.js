"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMintController = void 0;
const MintInteractor_js_1 = require("../../contexts/mint/application/MintInteractor.js");
class StoreMintController {
    run(payload) {
        MintInteractor_js_1.MintInteractor.saveNewMint(payload.data);
    }
}
exports.StoreMintController = StoreMintController;
