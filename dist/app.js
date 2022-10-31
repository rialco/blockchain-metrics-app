"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const server_js_1 = require("./server.js");
const CHANNELS = ['pairs', 'swaps', 'mints', 'burns'];
class App {
    async start() {
        this.server = new server_js_1.Server(CHANNELS);
        this.server.start();
    }
    async stop() {
        if (this.server) {
            return this.server.stop();
        }
    }
}
exports.App = App;
