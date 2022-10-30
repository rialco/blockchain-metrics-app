"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMetricsRoutes = void 0;
const express_1 = require("express");
const swaps_js_1 = require("./swaps.js");
const route = (0, express_1.Router)();
function registerMetricsRoutes(router) {
    router.use('/metrics', route);
    (0, swaps_js_1.registerSwapMetricsRoutes)(route);
}
exports.registerMetricsRoutes = registerMetricsRoutes;
