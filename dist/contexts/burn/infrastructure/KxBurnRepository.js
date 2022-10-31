"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KxBurnRepository = void 0;
const index_js_1 = require("../../../logger/index.js");
const KxConfig_js_1 = __importDefault(require("../../shared/infrastructure/postgres/KxConfig.js"));
class KxBurnRepository {
    static async persistBurn(data) {
        try {
            await (0, KxConfig_js_1.default)('burns').insert({
                sender_address: data.senderAddress,
                amount_0: data.amount0,
                amount_1: data.amount1,
                to_address: data.toAddress,
            });
        }
        catch (error) {
            index_js_1.logger.error('There was an error while trying to persist the new Mint.', error);
        }
    }
}
exports.KxBurnRepository = KxBurnRepository;
