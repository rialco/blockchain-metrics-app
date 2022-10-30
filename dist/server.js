"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const http_status_1 = __importDefault(require("http-status"));
const index_js_1 = require("./routes/index.js");
class Server {
    constructor(port) {
        this.corsOptions = {
            credentials: true,
            origin: process.env.INCOMING_URL || '*',
        };
        dotenv_1.default.config();
        this.port = port;
        this.express = (0, express_1.default)();
        this.express.use((0, helmet_1.default)());
        this.express.use((0, cors_1.default)(this.corsOptions));
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: true }));
        const router = (0, express_1.Router)();
        this.express.use(router);
        (0, index_js_1.registerRoutes)(router);
        // Catch not defined routes
        this.express.use((req, res) => {
            res.status(http_status_1.default.NOT_FOUND).json('Not found');
        });
        // Catch server related errors
        this.express.use((err, req, res) => {
            res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(err.message);
        });
    }
    async listen() {
        return new Promise((resolve) => {
            this.httpServer = this.express.listen(this.port, () => {
                console.log(`Server listening on port ${this.port}`);
                resolve();
            });
        });
    }
    getHttpServer() {
        return this.httpServer;
    }
    async stop() {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.close((err) => {
                    if (err) {
                        return reject();
                    }
                    return resolve();
                });
            }
            // There is no http server to close.
            return resolve();
        });
    }
}
exports.Server = Server;
