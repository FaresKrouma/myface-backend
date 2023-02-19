const express = require("express");
const { getUser } = require("../controllers/users.js");

const router = express.Router();

router.get("/", getUser);

module.exports = router;
