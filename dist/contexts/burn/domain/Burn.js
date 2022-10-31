"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Burn = void 0;
class Burn {
    constructor(senderAddress, amount0, amount1, toAddress) {
        this.senderAddress = senderAddress;
        this.amount0 = amount0;
        this.amount1 = amount1;
        this.toAddress = toAddress;
    }
}
exports.Burn = Burn;
