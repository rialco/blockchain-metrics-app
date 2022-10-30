"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSwapRoutes = void 0;
const express_1 = require("express");
const PersistSwapController_js_1 = require("../../controllers/swaps/PersistSwapController.js");
const route = (0, express_1.Router)();
function registerSwapRoutes(router) {
    router.use('/swaps', route);
    const persistSwapController = new PersistSwapController_js_1.PersistSwapController();
    route.post('/', (req, res) => {
        persistSwapController.run(req, res);
    });
}
exports.registerSwapRoutes = registerSwapRoutes;
