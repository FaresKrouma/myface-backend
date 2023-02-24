const express = require("express");
const db = require("../connect.js");
const { login, register, logout } = require("../controllers/auth.js");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

router.get("/register", (req, res) => {
  const q = "SELECT * FROM myface.users;";
  db.query(q, (err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

module.exports = router;
