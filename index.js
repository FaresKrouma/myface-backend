const express = require("express");
const mysql = require("mysql");
const PORT = 3001;

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "farzan1256**",
  table: "myface",
});

app.listen(PORT, () => console.log("connected to port 3001"));
