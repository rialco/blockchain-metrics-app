"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
try {
    new app_js_1.App().start();
}
catch (error) {
    console.log("App didn't start");
    process.exit(1);
}
process.on('uncaughtException', (err) => {
    console.log('uncaught exception', err);
    process.exit(1);
});
