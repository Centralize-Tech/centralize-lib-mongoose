"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFalabellaSchema = void 0;
exports.createUserFalabellaModel = createUserFalabellaModel;
const mongoose_1 = require("mongoose");
exports.userFalabellaSchema = new mongoose_1.Schema({
    mail: { type: String, required: true },
    enterpriseId: { type: String, required: true },
    first_mame: { type: String, required: true },
    last_name: { type: String, required: true },
    seller_name: { type: String, required: true },
    userId: { type: String, required: true },
    token: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
}, { timestamps: true });
function createUserFalabellaModel(conn) {
    return conn.model('Users', exports.userFalabellaSchema);
}
;
