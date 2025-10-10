"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMeliSchema = void 0;
exports.createAuthMeliModel = createAuthMeliModel;
const mongoose_1 = require("mongoose");
exports.authMeliSchema = new mongoose_1.Schema({
    access_token: { type: String, reuquired: true },
    token_type: { type: String, required: true },
    expires_in: { type: Number, required: true },
    scope: { type: String, required: true },
    user_id: { type: Number, required: true },
    refresh_token: { type: String, required: true }
}, {
    timestamps: true
});
function createAuthMeliModel(conn) {
    return conn.model('Auth', exports.authMeliSchema);
}
