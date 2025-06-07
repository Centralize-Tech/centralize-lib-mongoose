"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productParisSchema = void 0;
exports.createProductParisModel = createProductParisModel;
const mongoose_1 = require("mongoose");
exports.productParisSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    family: { type: Object, required: true },
    category: { type: Object, required: true },
    channels: [{ type: Object, required: true }],
    sellerId: { type: String, required: true },
    sellerSku: { type: String, required: true },
    refProduct: { type: String, required: true },
    attributes: [{ type: Object, required: true }],
    status: { type: String, required: true },
    variants: [{ type: Object, required: true }],
}, { timestamps: true });
function createProductParisModel(conn) {
    return conn.model('Products', exports.productParisSchema);
}
;
