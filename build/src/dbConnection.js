"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = getConnection;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const DB_URLS = {
    '1234': config_1.default.mongooseDB.DBHost,
    'Paris': config_1.default.mongooseDB.DBHostParis,
    'Falabella': config_1.default.mongooseDB.DBHostFalabella,
    'Ripley': config_1.default.mongooseDB.DBHostFalabella,
    'Meli': config_1.default.mongooseDB.DBHostMeli
};
const CONNECTIONS_MAP = new Map();
function getConnection(marketplace) {
    if (CONNECTIONS_MAP.has(marketplace)) {
        return CONNECTIONS_MAP.get(marketplace);
    }
    const uri = DB_URLS[marketplace] || DB_URLS['1234'];
    const newConn = mongoose_1.default.createConnection(uri);
    CONNECTIONS_MAP.set(marketplace, newConn);
    return newConn;
}
