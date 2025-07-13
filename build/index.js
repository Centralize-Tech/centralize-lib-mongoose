"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCentralize = exports.EnterpriseCentralize = exports.ProductFalabella = exports.UserFalabella = exports.UserParis = exports.ProductParis = exports.OrderParis = exports.Users = exports.Order = exports.Buyer = exports.Enterprise = exports.Products = exports.Message = exports.OrderMarketplace = exports.executeWithConnection = exports.isConnectionReady = exports.closeAllConnections = void 0;
exports.setMarketplace = setMarketplace;
const dbConnection_1 = require("./src/dbConnection");
Object.defineProperty(exports, "closeAllConnections", { enumerable: true, get: function () { return dbConnection_1.closeAllConnections; } });
Object.defineProperty(exports, "isConnectionReady", { enumerable: true, get: function () { return dbConnection_1.isConnectionReady; } });
Object.defineProperty(exports, "executeWithConnection", { enumerable: true, get: function () { return dbConnection_1.executeWithConnection; } });
const modelsMap_1 = require("./src/modelsMap");
__exportStar(require("./src/types"), exports);
let marketplace = 'Centralize'; // Cambiar default a 'Centralize'
function setMarketplace(mId) {
    marketplace = mId;
}
function createModelProxy(modelName) {
    function ModelProxy() { }
    return new Proxy(ModelProxy, {
        get(target, propKey, receiver) {
            // Verificar si la conexión está lista antes de crear el modelo
            if (!(0, dbConnection_1.isConnectionReady)(marketplace)) {
                console.warn(`Conexión no está lista para marketplace: ${marketplace}`);
            }
            const conn = (0, dbConnection_1.getConnection)(marketplace);
            const model = modelsMap_1.modelCreatorsMap[modelName](conn);
            return Reflect.get(model, propKey, receiver);
        },
        construct(target, args) {
            // Verificar si la conexión está lista antes de crear el modelo
            if (!(0, dbConnection_1.isConnectionReady)(marketplace)) {
                console.warn(`Conexión no está lista para marketplace: ${marketplace}`);
            }
            const conn = (0, dbConnection_1.getConnection)(marketplace);
            const model = modelsMap_1.modelCreatorsMap[modelName](conn);
            return new model(...args);
        },
    });
}
exports.OrderMarketplace = createModelProxy('OrderMarketplace');
exports.Message = createModelProxy('Message');
exports.Products = createModelProxy('Products');
exports.Enterprise = createModelProxy('Enterprise');
exports.Buyer = createModelProxy('Buyer');
exports.Order = createModelProxy('Order');
exports.Users = createModelProxy('Users');
// Paris
exports.OrderParis = createModelProxy('OrderParis');
exports.ProductParis = createModelProxy('ProductParis');
exports.UserParis = createModelProxy('UserParis');
// Falabella
exports.UserFalabella = createModelProxy('UserFalabella');
exports.ProductFalabella = createModelProxy('ProductFalabella');
// Centralize
exports.EnterpriseCentralize = createModelProxy('EnterpriseCentralize');
exports.UserCentralize = createModelProxy('UserCentralize');
