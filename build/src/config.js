"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mongooseDB: {
        DBHostCentralize: process.env.DB_HOST_CENTRALIZE || '',
        DBHostParis: process.env.DB_HOST_PARIS || '',
        DBHostFalabella: process.env.DB_HOST_FALABELLA || '',
        DBHostRipley: process.env.DB_HOST_RIPLEY || '',
        DBHostMeli: process.env.DB_HOST_MELI || '',
        DBHostShopify: process.env.DB_HOST_SHOPIFY || ''
    }
};
