"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swap = void 0;
class Swap {
    constructor(senderAddress, amount0In, amount1In, amount0Out, amount1Out, toAddress) {
        this.senderAddress = senderAddress;
        this.amount0In = amount0In;
        this.amount1In = amount1In;
        this.amount0Out = amount0Out;
        this.amount1Out = amount1Out;
        this.toAddress = toAddress;
    }
}
exports.Swap = Swap;
