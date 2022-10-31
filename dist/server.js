"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const index_js_1 = __importDefault(require("./bus/index.js"));
const BusController_js_1 = require("./controllers/BusController.js");
class Server {
    constructor(channels) {
        this.channels = channels;
    }
    listenForMessages() {
        const busController = new BusController_js_1.BusController();
        index_js_1.default.bus.on('message', (channel, message) => {
            const { type = 'unknown', ...data } = JSON.parse(message);
            const payload = {
                channel: channel,
                data: data,
                type: type,
            };
            busController.run(payload);
        });
    }
    async start() {
        await index_js_1.default.init(this.channels);
        this.listenForMessages();
    }
    async stop() {
        index_js_1.default.stop(this.channels);
    }
}
exports.Server = Server;
