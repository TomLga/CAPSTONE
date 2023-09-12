
require('dotenv').config();
const { createPool } = require("mysql");

const dbconnection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    port: process.env.dbPORT,
    password: process.env.dbPassword,
    connectionLimit: 10,
    multipleStatements: true
});

dbconnection.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
        connection.release();
    }
});

module.exports = dbconnection;
