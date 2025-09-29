"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productShopifySchema = void 0;
exports.createProductShopifyModel = createProductShopifyModel;
const mongoose_1 = require("mongoose");
exports.productShopifySchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, required: true },
    handle: { type: String, required: true },
    product_type: { type: String, required: true },
    published_at: { type: Date, required: true },
    title: { type: String, required: true },
    updated_at: { type: Date, required: true },
    vendor: { type: String, required: true },
    status: { type: String, required: true },
    published_scope: { type: String, required: true },
    tags: { type: String, required: true },
    variants: [{ type: Object, required: true }],
    options: [{ type: Object, required: true }],
    images: [{ type: Object, required: true }],
    image: { type: Object, required: true },
    category: { type: Object, required: true }
}, { timestamps: true });
function createProductShopifyModel(conn) {
    return conn.model('Product', exports.productShopifySchema);
}
