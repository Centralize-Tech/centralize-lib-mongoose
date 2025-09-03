"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enterpriseCentralizeSchema = void 0;
exports.createEnterpriseCentralizeModel = createEnterpriseCentralizeModel;
const mongoose_1 = require("mongoose");
exports.enterpriseCentralizeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    rut: { type: String, required: true },
    description: { type: String, required: false },
    companyName: { type: String, required: true, unique: true },
    marketplace: [{
            name: { type: String, required: true },
            apikey: { type: String, required: true },
            status: { type: Boolean, required: true, default: true }
        }],
    status: { type: Boolean, required: true, default: true },
}, { timestamps: true });
function createEnterpriseCentralizeModel(conn) {
    return conn.model('Enterprises', exports.enterpriseCentralizeSchema);
}
;
