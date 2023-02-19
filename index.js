// Initializing
const express = require("express");
const app = express();
const PORT = 3001;

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "farzan1256**",
  table: "myface",
});

// Routes
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const postsRoute = require("./routes/posts.js");
const commentsRoute = require("./routes/comments.js");
const likesRoute = require("./routes/likes.js");
const storiesRoute = require("./routes/stories.js");

// Middlewares
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/posts", postsRoute);
app.use("/comments", commentsRoute);
app.use("/likes", likesRoute);
app.use("/stories", storiesRoute);

app.get("/", (req, res) => {
  return res.json("server /get, Welcome");
});

app.listen(PORT, () => console.log("connected to port 3001"));
