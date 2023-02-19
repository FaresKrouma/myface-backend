const express = require("express");
const { login, register, logout } = require("../controllers/auth.js");

const router = express.Router();

router.get("/", login);

module.exports = router;
