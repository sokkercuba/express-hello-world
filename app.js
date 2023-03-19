const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const router = require("./routes");

// #############################################################################
// Logs all request paths and method
app.use(function (req, res, next) {
  res.set("x-timestamp", Date.now());
  res.set("x-powered-by", "cyclic.sh");
  console.log(
    `[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`
  );
  next();
});

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html", "css", "js", "ico", "jpg", "jpeg", "png", "svg"],
  index: ["index.html"],
  maxAge: "1m",
  redirect: false,
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

if (process.env.NODE_ENV === "production") {
  // Express  will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/dist", options)); //Finally - Express look if the request is for an asset
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

module.exports = app;
