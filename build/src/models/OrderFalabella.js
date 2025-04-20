"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFalabellaSchema = void 0;
exports.createOrderFalabellaModel = createOrderFalabellaModel;
const mongoose_1 = require("mongoose");
exports.orderFalabellaSchema = new mongoose_1.Schema({
    enterpriseId: { type: String, required: true },
    marketplace: { type: String, required: true },
    orderId: { type: String, required: true },
    status: { type: String, required: true },
    totalAmount: { type: String, required: true },
    buyer: {
        id: { type: String, required: true },
        name: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
    },
    productsQuantity: { type: String, required: true },
    products: [
        {
            id: { type: String, required: true },
            name: { type: String, required: true },
            sku: { type: String, required: true },
            quantity: { type: Number, required: true },
            unitPrice: { type: Number, required: true },
            totalPrice: { type: Number, required: true },
        }
    ],
    payment: {
        status: { type: String, required: true },
        paymentMethod: { type: String, required: true },
        currency: { type: String, required: true },
        totalPaid: { type: mongoose_1.Schema.Types.Mixed, required: true },
    },
    shipping: {
        address: { type: String, required: true },
        status: { type: String, required: true },
    },
    notes: { type: String, required: true },
    orderNumber: { type: String, required: true },
}, { timestamps: true });
function createOrderFalabellaModel(conn) {
    return conn.model('OrderFalabella', exports.orderFalabellaSchema);
}
