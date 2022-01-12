const mysql = require("mysql2/promise");




const pool = mysql.createPool({
    user: "root",
    password: "root",
    host: "localhost",
    port: 3306,
    database: "task1"
})



module.exports = pool;
