"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSwapMetricsRoutes = void 0;
const express_1 = require("express");
const GetSwapsCountController_js_1 = require("../../controllers/swaps/GetSwapsCountController.js");
const route = (0, express_1.Router)();
function registerSwapMetricsRoutes(router) {
    router.use('/swaps', route);
    const getSwapsCountController = new GetSwapsCountController_js_1.GetSwapsCountController();
    route.get('/count', (req, res) => {
        getSwapsCountController.run(req, res);
    });
}
exports.registerSwapMetricsRoutes = registerSwapMetricsRoutes;
