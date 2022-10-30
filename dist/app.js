"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const server_js_1 = require("./server.js");
class App {
    async start() {
        const port = process.env.PORT || '3000';
        this.server = new server_js_1.Server(port);
        return this.server.listen();
    }
    async stop() {
        if (this.server) {
            return this.server.stop();
        }
    }
    get httpServer() {
        if (this.server) {
            return this.server.getHttpServer();
        }
    }
}
exports.App = App;
