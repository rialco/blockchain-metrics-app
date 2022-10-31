"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletInteractor = void 0;
const KxWalletRepository_js_1 = require("../infrastructure/KxWalletRepository.js");
class WalletInteractor {
    static saveNewWallet(payload) {
        KxWalletRepository_js_1.KxWalletRepository.persistWallet(payload.data);
    }
}
exports.WalletInteractor = WalletInteractor;
