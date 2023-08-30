// config for js 
require('dotenv').config()
const {createPool} = require("mysql")
const dbconnection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    connectionLimit: 10,
    multipleStatements: true
    
})

module.exports = dbconnection