"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = getConnection;
exports.getConnectionAsync = getConnectionAsync;
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
    bufferCommands: false
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
    if (!uri) {
        throw new Error(`No se encontró URI de conexión para el marketplace: ${marketplace}`);
    }
    console.log(`Creando conexión para marketplace: ${marketplace}`);
    const newConn = mongoose_1.default.createConnection(uri, CONNECTION_OPTIONS);
    // Agregar listeners de eventos para debug
    newConn.on('connected', () => {
        console.log(`Conexión establecida para marketplace: ${marketplace}`);
    });
    newConn.on('error', (error) => {
        console.error(`Error en conexión para marketplace ${marketplace}:`, error);
    });
    newConn.on('disconnected', () => {
        console.log(`Conexión desconectada para marketplace: ${marketplace}`);
    });
    CONNECTIONS_MAP.set(marketplace, newConn);
    return newConn;
}
function getConnectionAsync(marketplace) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = getConnection(marketplace);
        if (connection.readyState === 1) {
            return connection;
        }
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error(`Connection timeout for marketplace: ${marketplace}`));
            }, 10000);
            const checkConnection = () => {
                console.log(`Estado de conexión para ${marketplace}: ${connection.readyState}`);
                if (connection.readyState === 1) {
                    clearTimeout(timeout);
                    resolve(connection);
                }
                else if (connection.readyState === 0) {
                    setTimeout(checkConnection, 100);
                }
                else {
                    clearTimeout(timeout);
                    reject(new Error(`Connection failed for marketplace: ${marketplace}. State: ${connection.readyState}`));
                }
            };
            checkConnection();
        });
    });
}
