"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KxMintRepository = void 0;
const index_js_1 = require("../../../logger/index.js");
const KxConfig_js_1 = __importDefault(require("../../shared/infrastructure/postgres/KxConfig.js"));
class KxMintRepository {
    static async persistMint(data) {
        try {
            await (0, KxConfig_js_1.default)('mints').insert({
                sender_address: data.senderAddress,
                amount_0: data.amount0,
                amount_1: data.amount1,
            });
        }
        catch (error) {
            index_js_1.logger.error('There was an error while trying to persist the new Mint.', error);
        }
    }
}
exports.KxMintRepository = KxMintRepository;
