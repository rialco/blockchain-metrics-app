"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapInteractor = void 0;
const KxWalletRepository_js_1 = require("../../wallet/infrastructure/KxWalletRepository.js");
const KxSwapRepository_js_1 = require("../infrastructure/KxSwapRepository.js");
class SwapInteractor {
    static async saveNewSwap(data) {
        await KxWalletRepository_js_1.KxWalletRepository.persistWallet({ address: data.toAddress });
        await KxSwapRepository_js_1.KxSwapRepository.persistSwap(data);
    }
}
exports.SwapInteractor = SwapInteractor;
