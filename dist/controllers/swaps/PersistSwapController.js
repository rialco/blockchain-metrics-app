"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistSwapController = void 0;
class PersistSwapController {
    async run(req, res) {
        try {
            res.status(200).send('Persist swap');
        }
        catch (error) {
            res.status(400).send(`(ERROR) ==> Fail to persist swap.`);
        }
    }
}
exports.PersistSwapController = PersistSwapController;
