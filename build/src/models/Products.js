"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsSchema = void 0;
exports.createProductsModel = createProductsModel;
const mongoose_1 = require("mongoose");
exports.productsSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    enterpriseId: { type: String, required: true },
    extraData: { type: Object, required: true },
    zise: { type: String, required: false },
    sku: { type: String, required: true },
    title: { type: String, required: true },
    attachments: { type: [String], required: false, default: [] },
    attatchments: { type: [], required: false, default: [] },
    height: { type: Number, required: false },
    length: { type: Number, required: false },
    weight: { type: Number, required: false },
    width: { type: Number, required: false },
    imageUrl: { type: String, required: false },
}, { timestamps: true });
function createProductsModel(conn) {
    return conn.model('Products', exports.productsSchema);
}
;
