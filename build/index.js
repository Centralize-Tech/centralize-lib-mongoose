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
exports.OrderParis = exports.Users = exports.Order = exports.Buyer = exports.Enterprise = exports.Products = exports.Message = exports.OrderMarketplace = void 0;
exports.setMarketplace = setMarketplace;
const dbConnection_1 = require("./src/dbConnection");
const modelsMap_1 = require("./src/modelsMap");
__exportStar(require("./src/types"), exports);
let marketplace = '1234';
function setMarketplace(mId) {
    marketplace = mId;
}
function createModelProxy(modelName) {
    function ModelProxy() { }
    return new Proxy(ModelProxy, {
        get(target, propKey, receiver) {
            const conn = (0, dbConnection_1.getConnection)(marketplace);
            const model = modelsMap_1.modelCreatorsMap[modelName](conn);
            return Reflect.get(model, propKey, receiver);
        },
        construct(target, args) {
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
exports.OrderParis = createModelProxy('OrderParis');
