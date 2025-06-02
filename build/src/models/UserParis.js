"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userParisSchema = void 0;
exports.createUserParisModel = createUserParisModel;
const mongoose_1 = require("mongoose");
exports.userParisSchema = new mongoose_1.Schema({
    accessToken: { type: String, required: true },
    clientId: { type: String, required: true },
    mail: { type: String, required: true },
    enterpriseId: { type: String, required: true },
    first_mame: { type: String, required: true },
    last_name: { type: String, required: true },
    seller_id: { type: String, required: true },
    seller_name: { type: String, required: true },
    token: { type: String, required: true },
}, { timestamps: true });
function createUserParisModel(conn) {
    return conn.model('Users', exports.userParisSchema);
}
;
