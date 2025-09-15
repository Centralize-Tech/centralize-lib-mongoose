"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productShopifySchema = void 0;
exports.createProductShopifyModel = createProductShopifyModel;
const mongoose_1 = require("mongoose");
exports.productShopifySchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    handle: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    vendor: { type: String, required: true },
    productType: { type: String, required: true },
    tags: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    images: [{ type: Object, required: true }],
    variants: [{ type: Object, required: true }]
}, { timestamps: true });
function createProductShopifyModel(conn) {
    return conn.model('Product', exports.productShopifySchema);
}
