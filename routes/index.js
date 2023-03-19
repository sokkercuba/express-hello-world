const express = require("express");
const router = express.Router();
const routes = require("./routes");

/* GET home page. */
router.get("/api/v1", function (req, res, next) {
  res.send(
    "<p>This is an auxiliary API for Sokker Helper chrome extension requests</p>"
  );
});

router.use("/api/v1", routes);

module.exports = router;
