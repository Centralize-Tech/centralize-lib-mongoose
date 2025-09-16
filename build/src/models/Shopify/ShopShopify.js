"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopShopifySchema = void 0;
exports.createShopShopifyModel = createShopShopifyModel;
const mongoose_1 = require("mongoose");
exports.shopShopifySchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    shop: { type: String, required: true },
    token: { type: String, required: true },
    scopes: { type: String, required: true }
}, {
    timestamps: true
});
function createShopShopifyModel(conn) {
    return conn.model('Shop', exports.shopShopifySchema);
}
