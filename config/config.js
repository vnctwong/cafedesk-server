const fs = require('fs');
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'cafedesk',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5431,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'cafedesk',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5431,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'cafedesk',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5431,
    dialect: 'postgres',
  },
};
