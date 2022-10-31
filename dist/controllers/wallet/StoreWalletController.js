"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreWalletController = void 0;
const WalletInteractor_js_1 = require("../../contexts/wallet/application/WalletInteractor.js");
class StoreWalletController {
    run(payload) {
        WalletInteractor_js_1.WalletInteractor.saveNewWallet(payload.data);
    }
}
exports.StoreWalletController = StoreWalletController;
