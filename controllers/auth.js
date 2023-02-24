const db = require("../connect.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  // check if user exists
  q = "SELECT * FROM myface.users WHERE `email` = ?;";
  values = req.body.email;

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User Already Exists. :/");

    // hashing the password then creating user.

    // hashing the password:
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    // storing new user:
    const q =
      "INSERT INTO myface.users (`username`,`email`,`password`,`name`) VALUES(?);";
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("user created :) !");
    });
  });
};

const login = (req, res) => {
  // Check if User Exists:
  const q = "SELECT * FROM myface.users WHERE `email` = ?;";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(409).json("No User Found. :(");
    //assuming user found , checking password:
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(400).json("wrong password or Username.");
    // assuming password is correct , logging in and storing cookie containing user id:
    const { password, ...others } = data[0];
    const token = jwt.sign({ id: data[0].id }, "secretKey");
    return res
      .status(200)
      .cookie("accessToken", token, { httpOnly: "true" })
      .json(others);
  });
};

const logout = (req, res) => {
  res
    .clearCookie("accessToken", { secure: true, sameSite: "none" })
    .status(200)
    .json("logged out :)");
};

module.exports = { login, register, logout };
