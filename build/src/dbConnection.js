"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = getConnection;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const DB_URLS = {
    'Centralize': config_1.default.mongooseDB.DBHostCentralize,
    'Paris': config_1.default.mongooseDB.DBHostParis,
    'Falabella': config_1.default.mongooseDB.DBHostFalabella,
    'Ripley': config_1.default.mongooseDB.DBHostFalabella,
    'Meli': config_1.default.mongooseDB.DBHostMeli
};
const CONNECTIONS_MAP = new Map();
// Configuración optimizada para AWS Lambda
const CONNECTION_OPTIONS = {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 10000,
    maxPoolSize: 1,
    minPoolSize: 0,
    bufferCommands: false,
    bufferMaxEntries: 0
};
function getConnection(marketplace) {
    if (CONNECTIONS_MAP.has(marketplace)) {
        const existingConn = CONNECTIONS_MAP.get(marketplace);
        if (existingConn.readyState === 1) {
            return existingConn;
        }
        CONNECTIONS_MAP.delete(marketplace);
    }
    const uri = DB_URLS[marketplace] || DB_URLS['Centralize'];
    const newConn = mongoose_1.default.createConnection(uri, CONNECTION_OPTIONS);
    CONNECTIONS_MAP.set(marketplace, newConn);
    return newConn;
}
