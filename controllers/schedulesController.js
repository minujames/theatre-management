
var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/schedules", function(request, response) {
  response.json({controller: "schedules"});
});

module.exports = router;