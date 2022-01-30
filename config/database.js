/**
 * Archive: config/database.js
 * Description: file responsible for 
 * the application's connectionStrings: PostgreSQL.
 * Author: MD Humayun Kabir bulbul
 */

 module.exports = {
    HOST: "127.0.0.1",
    USER: "postgres",
    PASSWORD: "pg@123",
    DB: "sales_module",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
