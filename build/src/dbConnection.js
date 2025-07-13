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
exports.closeAllConnections = closeAllConnections;
exports.isConnectionReady = isConnectionReady;
exports.executeWithConnection = executeWithConnection;
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
// Opciones de conexión optimizadas para AWS Lambda
const CONNECTION_OPTIONS = {
    serverSelectionTimeoutMS: 5000, // Timeout para selección de servidor
    socketTimeoutMS: 45000, // Timeout para operaciones de socket
    connectTimeoutMS: 10000, // Timeout para conexión inicial
    maxPoolSize: 1, // Para Lambda, mantener pool pequeño
    minPoolSize: 0, // No mantener conexiones activas
    maxIdleTimeMS: 30000, // Cerrar conexiones inactivas después de 30s
    retryWrites: true,
    retryReads: true,
    bufferCommands: false, // Deshabilitar buffering para Lambda
    bufferMaxEntries: 0,
    // Opciones específicas para AWS Lambda
    keepAlive: true,
    keepAliveInitialDelay: 300000, // 5 minutos
};
function getConnection(marketplace) {
    if (CONNECTIONS_MAP.has(marketplace)) {
        const existingConn = CONNECTIONS_MAP.get(marketplace);
        // Verificar si la conexión está activa
        if (existingConn.readyState === 1) {
            return existingConn;
        }
        // Si la conexión no está activa, removerla del mapa
        CONNECTIONS_MAP.delete(marketplace);
    }
    const uri = DB_URLS[marketplace] || DB_URLS['Centralize'];
    if (!uri) {
        throw new Error(`No se encontró URI de conexión para el marketplace: ${marketplace}`);
    }
    console.log(`Creando nueva conexión para marketplace: ${marketplace}`);
    const newConn = mongoose_1.default.createConnection(uri, CONNECTION_OPTIONS);
    // Manejar eventos de conexión
    newConn.on('connected', () => {
        console.log(`Conexión establecida para marketplace: ${marketplace}`);
    });
    newConn.on('error', (error) => {
        console.error(`Error en conexión para marketplace ${marketplace}:`, error);
        CONNECTIONS_MAP.delete(marketplace);
    });
    newConn.on('disconnected', () => {
        console.log(`Conexión desconectada para marketplace: ${marketplace}`);
        CONNECTIONS_MAP.delete(marketplace);
    });
    CONNECTIONS_MAP.set(marketplace, newConn);
    return newConn;
}
// Función para cerrar todas las conexiones (útil para Lambda)
function closeAllConnections() {
    return __awaiter(this, void 0, void 0, function* () {
        const closePromises = Array.from(CONNECTIONS_MAP.values()).map(conn => {
            if (conn.readyState === 1) {
                return conn.close();
            }
            return Promise.resolve();
        });
        yield Promise.all(closePromises);
        CONNECTIONS_MAP.clear();
        console.log('Todas las conexiones han sido cerradas');
    });
}
// Función para verificar el estado de una conexión
function isConnectionReady(marketplace) {
    const conn = CONNECTIONS_MAP.get(marketplace);
    return conn ? conn.readyState === 1 : false;
}
// Función helper para ejecutar operaciones de base de datos con manejo de errores
function executeWithConnection(marketplace_1, operation_1) {
    return __awaiter(this, arguments, void 0, function* (marketplace, operation, maxRetries = 3) {
        let lastError = null;
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const connection = getConnection(marketplace);
                // Esperar a que la conexión esté lista si no lo está
                if (connection.readyState !== 1) {
                    console.log(`Esperando conexión para marketplace: ${marketplace}, intento ${attempt}`);
                    yield new Promise((resolve, reject) => {
                        const timeout = setTimeout(() => {
                            reject(new Error(`Timeout esperando conexión para marketplace: ${marketplace}`));
                        }, 10000);
                        const checkConnection = () => {
                            if (connection.readyState === 1) {
                                clearTimeout(timeout);
                                resolve();
                            }
                            else if (connection.readyState === 0) {
                                setTimeout(checkConnection, 100);
                            }
                            else {
                                clearTimeout(timeout);
                                reject(new Error(`Conexión falló para marketplace: ${marketplace}`));
                            }
                        };
                        checkConnection();
                    });
                }
                return yield operation(connection);
            }
            catch (error) {
                lastError = error;
                console.error(`Error en intento ${attempt} para marketplace ${marketplace}:`, error);
                // Si no es el último intento, limpiar la conexión y reintentar
                if (attempt < maxRetries) {
                    CONNECTIONS_MAP.delete(marketplace);
                    yield new Promise(resolve => setTimeout(resolve, 1000 * attempt)); // Backoff exponencial
                }
            }
        }
        throw new Error(`Operación falló después de ${maxRetries} intentos para marketplace ${marketplace}: ${lastError === null || lastError === void 0 ? void 0 : lastError.message}`);
    });
}
