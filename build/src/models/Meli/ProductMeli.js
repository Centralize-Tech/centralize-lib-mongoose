"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productMeliSchema = void 0;
exports.createProductMeliModel = createProductMeliModel;
const mongoose_1 = require("mongoose");
exports.productMeliSchema = new mongoose_1.Schema({
    product_id: { type: String, required: true },
    title: { type: String, required: true },
    seller_id: { type: Number, required: true },
    category_id: { type: String, required: true },
    price: { type: Number, required: true },
    base_price: { type: Number, required: true },
    currency_id: { type: String, required: true },
    initial_quantity: { type: Number, required: true },
    available_quantity: { type: Number, required: true },
    sold_quantity: { type: Number, required: true },
    sale_terms: [{ type: Object, required: true }],
    buying_mode: { type: String, required: true },
    listing_type_id: { type: String, required: true },
    start_time: { type: Date, required: true },
    stop_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    expiration_time: { type: Date, required: true },
    condition: { type: String, required: true },
    permalink: { type: String, required: true },
    thumbnail_id: { type: String, required: true },
    thumbnail: { type: String, required: true },
    pictures: [{ type: Object, required: true }],
    descriptions: [{ type: Object }],
    accepts_mercadopago: { type: Boolean, required: true },
    international_delivery_mode: { type: String },
    attributes: [{ type: Object, required: true }],
    listing_source: { type: String },
    variations: [{ type: Object, required: true }],
    status: { type: String, required: true },
    tags: [{ type: String, required: true }],
    warranty: { type: String, required: true },
    domain_id: { type: String, required: true },
    automatic_relist: { type: Boolean, required: true },
    date_created: { type: Date, required: true },
    last_updated: { type: Date, required: true }
}, { timestamps: true });
function createProductMeliModel(conn) {
    return conn.model('Product', exports.productMeliSchema);
}
