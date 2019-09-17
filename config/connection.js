const mysql = require("mysql");

connection.connect(function (err) {
    if (process.env.JAWSDB_URL) {
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {

        connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Amartin4",
            database: "burgers_db"
        });
    }
    connection.connect();
    module.exports = connection;