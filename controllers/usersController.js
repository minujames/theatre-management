
var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/users", function(request, response) {
  response.json({controller: "users"});
});



module.exports = router;