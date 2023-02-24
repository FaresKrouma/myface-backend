const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "farzan1256**",
  table: "myface",
});

module.exports = db;
