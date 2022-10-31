"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KxWalletRepository = void 0;
const index_js_1 = require("../../../logger/index.js");
const KxConfig_js_1 = __importDefault(require("../../shared/infrastructure/postgres/KxConfig.js"));
class KxWalletRepository {
    static async persistWallet(data) {
        try {
            await (0, KxConfig_js_1.default)('wallets').insert({
                address: data.address,
            });
        }
        catch (error) {
            index_js_1.logger.error(`There was an error while trying to persist the new Wallet >>>> ${error}`);
        }
    }
}
exports.KxWalletRepository = KxWalletRepository;
