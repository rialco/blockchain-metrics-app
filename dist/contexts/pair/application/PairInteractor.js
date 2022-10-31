"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairInteractor = void 0;
const KxPairRepository_js_1 = require("../infrastructure/KxPairRepository.js");
class PairInteractor {
    static saveNewPair(payload) {
        KxPairRepository_js_1.KxPairRepository.persistPair(payload.data);
    }
}
exports.PairInteractor = PairInteractor;
