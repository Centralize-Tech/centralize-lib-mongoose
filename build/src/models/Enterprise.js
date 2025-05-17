"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnterpriseModel = createEnterpriseModel;
const mongoose_1 = require("mongoose");
const enterpriseSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    status: { type: Boolean, required: true },
    loginCode: { type: String, required: true },
    description: { type: String, required: true },
    enterpriseStatus: { type: String, enum: ['active', 'inactive'] },
    marketplaces: [{
            type: { type: String, required: true },
            apiKey: { type: String, required: false },
            apiSecret: { type: String, required: false },
            token: { type: String, required: false },
            refreshToken: { type: String, required: false },
            expiresIn: { type: Number, required: false },
            account: { type: mongoose_1.Schema.Types.Mixed, required: false }
        }],
}, { timestamps: true });
function createEnterpriseModel(conn) {
    return conn.model('Enterprise', enterpriseSchema);
}
