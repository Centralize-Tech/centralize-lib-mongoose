"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFalabellaSchema = void 0;
exports.createProductFalabellaModel = createProductFalabellaModel;
const mongoose_1 = require("mongoose");
exports.productFalabellaSchema = new mongoose_1.Schema({
    requestId: { type: String, required: true },
    enterpriseId: { type: String, required: true },
    sku: { type: String, required: true },
    image: { type: mongoose_1.Schema.Types.Mixed, required: true },
    product: { type: mongoose_1.Schema.Types.Mixed, required: true },
    status: { type: Boolean, required: true, default: true },
}, { timestamps: true });
function createProductFalabellaModel(conn) {
    return conn.model('Products', exports.productFalabellaSchema);
}
;
