"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSwapsCountController = void 0;
class GetSwapsCountController {
    async run(req, res) {
        try {
            res.status(200).send('Get swap count');
        }
        catch (error) {
            res.status(400).send(`(ERROR) ==> Fail to retrieve swap count.`);
        }
    }
}
exports.GetSwapsCountController = GetSwapsCountController;
