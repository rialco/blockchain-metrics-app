"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pair = void 0;
class Pair {
    constructor(token0Address, token1Adress, pairAddress, pairIdx) {
        this.token0Address = token0Address;
        this.token1Adress = token1Adress;
        this.pairAddress = pairAddress;
        this.pairIdx = pairIdx;
    }
}
exports.Pair = Pair;
