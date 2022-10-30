"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const index_js_1 = require("./metrics/index.js");
const index_js_2 = require("./swaps/index.js");
function registerRoutes(router) {
    (0, index_js_2.registerSwapRoutes)(router);
    (0, index_js_1.registerMetricsRoutes)(router);
}
exports.registerRoutes = registerRoutes;
