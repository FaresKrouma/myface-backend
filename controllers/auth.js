const login = (req, res) => {
  res.json("login");
  // check if user exists , if not send error

  // check if user exists, if so check details
};

const register = (req, res) => {
  res.json("register");
  // check if user exists , if so send error (user exists already)

  // if no user found , create user
  // hash password
};

const logout = (req, res) => {
  res.json("logout");
};

module.exports = { login, register, logout };
