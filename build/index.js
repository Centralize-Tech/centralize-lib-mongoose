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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCentralize = exports.EnterpriseCentralize = exports.ProductFalabella = exports.UserFalabella = exports.UserParis = exports.ProductParis = exports.OrderParis = exports.Users = exports.Order = exports.Buyer = exports.Enterprise = exports.Products = exports.Message = exports.OrderMarketplace = void 0;
exports.setMarketplace = setMarketplace;
const dbConnection_1 = require("./src/dbConnection");
const modelsMap_1 = require("./src/modelsMap");
__exportStar(require("./src/types"), exports);
let marketplace = 'Centralize';
function setMarketplace(mId) {
    marketplace = mId;
}
function createModelProxy(modelName) {
    function ModelProxy() { }
    return new Proxy(ModelProxy, {
        get(target, propKey, receiver) {
            return function (...args) {
                return __awaiter(this, void 0, void 0, function* () {
                    const conn = yield (0, dbConnection_1.getConnectionAsync)(marketplace);
                    const model = modelsMap_1.modelCreatorsMap[modelName](conn);
                    const method = Reflect.get(model, propKey, receiver);
                    return method.apply(model, args);
                });
            };
        },
        construct(target, args) {
            return (() => __awaiter(this, void 0, void 0, function* () {
                const conn = yield (0, dbConnection_1.getConnectionAsync)(marketplace);
                const model = modelsMap_1.modelCreatorsMap[modelName](conn);
                return new model(...args);
            }))();
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
