"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCentralizeSchema = void 0;
exports.createProductCentralizeModel = createProductCentralizeModel;
const mongoose_1 = require("mongoose");
exports.productCentralizeSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    sku: { type: String, required: true },
    attatchments: { type: [], required: false, default: [] },
    extraData: {
        type: Object,
        required: false,
    },
    enterpriseId: { type: String, required: true },
}, { timestamps: true });
exports.productCentralizeSchema.index({ sku: 1, enterpriseId: 1 }, { unique: true });
function createProductCentralizeModel(conn) {
    return conn.model('ProductCentralize', exports.productCentralizeSchema);
}
