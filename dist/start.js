"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const index_js_1 = require("./logger/index.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
try {
    new app_js_1.App().start();
}
catch (error) {
    index_js_1.logger.error('App didnt start');
    process.exit(1);
}
process.on('uncaughtException', (err) => {
    index_js_1.logger.error('uncaught exception ', err);
    process.exit(1);
});
