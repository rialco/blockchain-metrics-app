"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KxPairRepository = void 0;
const index_js_1 = require("../../../logger/index.js");
const KxConfig_js_1 = __importDefault(require("../../shared/infrastructure/postgres/KxConfig.js"));
class KxPairRepository {
    static async persistPair(data) {
        try {
            await (0, KxConfig_js_1.default)('pairs').insert({
                token_0_address: data.token0Address,
                token_1_address: data.token1Adress,
                address: data.pairAddress,
            });
        }
        catch (error) {
            index_js_1.logger.error(`There was an error while trying to persist the new Pair. >>>> ${error}`);
        }
    }
}
exports.KxPairRepository = KxPairRepository;
