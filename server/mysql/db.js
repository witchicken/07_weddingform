require("dotenv").config();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test123",
  database: "weddingform",
});

module.exports = db;
