"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintInteractor = void 0;
const KxWalletRepository_js_1 = require("../../wallet/infrastructure/KxWalletRepository.js");
const KxMintRepository_js_1 = require("../infrastructure/KxMintRepository.js");
class MintInteractor {
    static async saveNewMint(data) {
        await KxWalletRepository_js_1.KxWalletRepository.persistWallet({ address: data.senderAddress });
        await KxMintRepository_js_1.KxMintRepository.persistMint(data);
    }
}
exports.MintInteractor = MintInteractor;
