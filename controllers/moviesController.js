
var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/movies", function(request, response) {
  response.json({controller: "movies"});
});

module.exports = router;