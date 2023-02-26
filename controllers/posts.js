const db = require("../connect.js");
db.query;

const getPosts = (req, res) => {
  res.json("you are here through controller");
};

module.exports = { getPosts };
