export default {
  mongooseDB: {
    DBHost: process.env.DB_HOST || '',
    DBHostParis: process.env.DB_HOST_PARIS || '',
    DBHostFalabella: process.env.DB_HOST_FALABELLA || '',
    DBHostRipley: process.env.DB_HOST_RIPLEY || '',
    DBHostMeli: process.env.DB_HOST_MELI || '',
  }
};
