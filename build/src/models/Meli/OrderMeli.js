"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMeliSchema = void 0;
exports.createOrderMeliModel = createOrderMeliModel;
const mongoose_1 = require("mongoose");
exports.orderMeliSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    date_created: { type: Date },
    last_updated: { type: Date },
    date_closed: { type: Date },
    pack_id: { type: Number },
    buying_mode: { type: String },
    total_amount: { type: Number },
    paid_amount: { type: Number },
    order_items: [{ type: Object }],
    currency_id: { type: String },
    payments: [{ type: Object }],
    shipping: { type: Object },
    status: { type: String },
    tags: [{ type: String }],
    internal_tags: [{ type: String }],
    static_tags: [{ type: String }],
    feedback: { type: Object },
    seller: { type: Object },
    buyer: { type: Object },
    cancel_detail: { type: Object },
    order_request: { type: Object },
    order_last_updated: { type: Date },
    shipping_last_updated: { type: Date },
    enterprise_id: { type: String, required: true }
}, {
    timestamps: true
});
function createOrderMeliModel(conn) {
    return conn.model('Order', exports.orderMeliSchema);
}
