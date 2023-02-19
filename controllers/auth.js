const login = (req, res) => {
  res.json("login");
};

const register = (req, res) => {
  res.json("register");
};

const logout = (req, res) => {
  res.json("logout");
};

module.exports = { login, register, logout };
