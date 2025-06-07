"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderParisSchema = void 0;
exports.createOrderParisModel = createOrderParisModel;
const mongoose_1 = require("mongoose");
exports.orderParisSchema = new mongoose_1.Schema({
    billingAddress: { type: Object, required: true },
    businessInvoice: { type: Object, required: true },
    createdAt: { type: String, required: true },
    customer: { type: Object, required: true },
    enterpriseId: { type: String, required: true },
    id: { type: String, required: true },
    origin: { type: String, required: true },
    originInvoiceType: { type: String, required: true },
    originOrderDate: { type: String, required: true },
    originOrderNumber: { type: String, required: true },
    subOrderNumber: { type: String, required: true },
    subOrders: [{ type: Object, required: true }],
    users: { type: mongoose_1.Types.ObjectId, ref: 'users' },
}, { timestamps: true });
function createOrderParisModel(conn) {
    return conn.model('Orders', exports.orderParisSchema);
}
;
