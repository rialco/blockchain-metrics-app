"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knex = (0, knex_1.default)({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5434,
        user: 'pf',
        password: 'pf',
        database: 'firepot',
    },
});
exports.default = knex;
