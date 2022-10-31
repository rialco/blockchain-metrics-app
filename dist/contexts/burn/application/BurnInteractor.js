"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurnInteractor = void 0;
const KxWalletRepository_js_1 = require("../../wallet/infrastructure/KxWalletRepository.js");
const KxBurnRepository_js_1 = require("../infrastructure/KxBurnRepository.js");
class BurnInteractor {
    static async saveNewBurn(data) {
        await KxWalletRepository_js_1.KxWalletRepository.persistWallet({ address: data.senderAddress });
        await KxBurnRepository_js_1.KxBurnRepository.persistBurn(data);
    }
}
exports.BurnInteractor = BurnInteractor;
