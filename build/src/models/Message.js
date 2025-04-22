"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = void 0;
exports.createMessageModel = createMessageModel;
const mongoose_1 = require("mongoose");
exports.messageSchema = new mongoose_1.Schema({
    orderId: { type: String, required: true },
    content: { type: Object, required: true },
    createdBy: { type: String, required: true },
    enterpriseId: { type: String, required: true },
}, { timestamps: true });
function createMessageModel(conn) {
    return conn.model('Message', exports.messageSchema);
}
