"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = orderModel;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    enterpriseId: { type: String, required: true },
    marketplace: { type: String, required: true },
    orderId: { type: String, required: true, unique: true },
    status: { type: String, required: true },
    buyer: { type: Object, required: true },
    products: { type: [], required: true },
    payment: { type: Object, required: true },
    shipping: { type: Object, required: true },
    notes: { type: String },
    users: { type: mongoose_1.Types.ObjectId, ref: 'Users' },
}, { timestamps: true });
function orderModel(conn) {
    return conn.model('Order', orderSchema);
}
