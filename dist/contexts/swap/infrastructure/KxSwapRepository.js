"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KxSwapRepository = void 0;
const index_js_1 = require("../../../logger/index.js");
const KxConfig_js_1 = __importDefault(require("../../shared/infrastructure/postgres/KxConfig.js"));
class KxSwapRepository {
    static async persistSwap(data) {
        try {
            await (0, KxConfig_js_1.default)('swaps').insert({
                from_address: data.senderAddress,
                amount_0_in: data.amount0In,
                amount_1_in: data.amount1In,
                amount_0_out: data.amount0Out,
                amount_1_out: data.amount1Out,
                to_address: data.toAddress,
            });
        }
        catch (error) {
            index_js_1.logger.error(`There was an error while trying to persist the new Swap. >>>> ${error}`);
        }
    }
}
exports.KxSwapRepository = KxSwapRepository;
