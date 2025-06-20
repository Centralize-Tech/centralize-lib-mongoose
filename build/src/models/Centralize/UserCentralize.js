"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCentralizeSchema = void 0;
exports.createUserCentralizeModel = createUserCentralizeModel;
const mongoose_1 = require("mongoose");
exports.userCentralizeSchema = new mongoose_1.Schema({
    enterpriseId: { type: String, required: true },
    rol: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    rut: { type: String, required: true },
    name: { type: String, required: true },
    loginCode: { type: String, required: true, unique: true },
}, { timestamps: true });
function createUserCentralizeModel(conn) {
    return conn.model('Users', exports.userCentralizeSchema);
}
;
