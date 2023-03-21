const express = require("express");
const app = express();
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

app.set("trust proxy", true);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use(express.static("public", options));

app.use("*", (req, res) => {
  res
    .json({
      at: new Date().toISOString(),
      method: req.method,
      hostname: req.hostname,
      ip: req.ip,
      query: req.query,
      headers: req.headers,
      cookies: req.cookies,
      params: req.params,
    })
    .end();
});

module.exports = app;
