"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMeliSchema = void 0;
exports.createOrderMeliModel = createOrderMeliModel;
const mongoose_1 = require("mongoose");
exports.orderMeliSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    date_created: { type: Date, required: true },
    last_updated: { type: Date, required: true },
    date_closed: { type: Date },
    pack_id: { type: Number, required: true },
    buying_mode: { type: String, required: true },
    total_amount: { type: Number, required: true },
    paid_amount: { type: Number, required: true },
    currency_id: { type: String, required: true },
    payments: [{ type: Object }],
    shipping: { type: Object, required: true },
    status: { type: String, required: true },
    tags: [{ type: String }],
    internal_tags: [{ type: String }],
    static_tags: [{ type: String }],
    feedback: { type: Object },
    seller: { type: Object, required: true },
    buyer: { type: Object, required: true },
    cancel_detail: { type: Object },
    order_request: { type: Object }
}, {
    timestamps: true
});
function createOrderMeliModel(conn) {
    return conn.model('Order', exports.orderMeliSchema);
}
