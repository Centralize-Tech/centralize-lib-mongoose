"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBuyersModel = createBuyersModel;
const mongoose_1 = require("mongoose");
const buyersSchema = new mongoose_1.Schema({
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
function createBuyersModel(conn) {
    return conn.model('Buyers', buyersSchema);
}
