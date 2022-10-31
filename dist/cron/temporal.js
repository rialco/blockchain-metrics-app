"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../logger/index.js");
const KxConfig_js_1 = __importDefault(require("../contexts/shared/infrastructure/postgres/KxConfig.js"));
async function start() {
    try {
        await (0, KxConfig_js_1.default)('general_metrics').insert({
            vol_over_past_7_days_usdc: 12446,
            vol_over_past_7_days_amb: 942801,
            avg_24hr_vol_past_7_days_usdc: 1778,
            avg_24hr_vol_past_7_days_amb: 134685,
            liquidity_pool_total_usdc: 52291,
            liquidity_pool_total_amb: 4019296,
            liquidity_pool_total_flp: 456787,
            current_num_liquidity_providers: 35,
        });
    }
    catch (error) {
        index_js_1.logger.error(`There was an error while trying to persist the general metrics. ${error}`);
    }
}
start();
