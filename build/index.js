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
exports.Buyer = exports.Enterprise = exports.Products = exports.Message = exports.OrderMarketplace = void 0;
exports.setEnterpriseId = setEnterpriseId;
const dbConnection_1 = require("./src/dbConnection");
const modelsMap_1 = require("./src/modelsMap");
__exportStar(require("./src/types"), exports);
let currentEnterpriseId = '1234';
function setEnterpriseId(eId) {
    currentEnterpriseId = eId;
}
function createModelProxy(modelName) {
    function ModelProxy() { }
    return new Proxy(ModelProxy, {
        get(target, propKey, receiver) {
            const conn = (0, dbConnection_1.getConnection)(currentEnterpriseId);
            const model = modelsMap_1.modelCreatorsMap[modelName](conn);
            return Reflect.get(model, propKey, receiver);
        },
        construct(target, args) {
            const conn = (0, dbConnection_1.getConnection)(currentEnterpriseId);
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
