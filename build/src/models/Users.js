"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersModel = usersModel;
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    accessToken: { type: String, required: true },
    enterpriseId: { type: String, required: true },
    clientId: { type: String, required: true },
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    seller_id: { type: String, required: true },
    seller_name: { type: String, required: true },
    token: { type: String, required: true },
}, { timestamps: true });
function usersModel(conn) {
    return conn.model('Users', usersSchema);
}
