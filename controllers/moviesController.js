
var express = require("express");
var router = express.Router();

var db = require("../models");

router.post("/movies", function(request, response) {
  console.log(request.body);
  response.json({controller: "movies"});
});

module.exports = router;