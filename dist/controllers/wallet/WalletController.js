"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletController = void 0;
const StoreWalletController_js_1 = require("./StoreWalletController.js");
class WalletController {
    run(payload) {
        const storeWalletController = new StoreWalletController_js_1.StoreWalletController();
        const instructionMap = {
            store: storeWalletController.run,
        };
        const wallet = {
            address: payload.data.address,
        };
        payload.data = wallet;
        instructionMap[payload.type](payload);
    }
}
exports.WalletController = WalletController;
