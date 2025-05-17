"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBuyerModel = createBuyerModel;
const mongoose_1 = require("mongoose");
const buyerSchema = new mongoose_1.Schema({
    enterpriseId: { type: String, required: true },
    address: {
        additional_info: { type: String, default: null },
        city: { type: String, required: true },
        company: { type: String, default: null },
        company_2: { type: String, default: null },
        country: { type: String, required: true }
    },
    email: { type: String, required: true },
    id: { type: String, required: true },
    lastName: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true }
}, { timestamps: true });
function createBuyerModel(conn) {
    return conn.model('Buyer', buyerSchema);
}
