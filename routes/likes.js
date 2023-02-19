const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("you are here in Likes, it Worked");
});

module.exports = router;
