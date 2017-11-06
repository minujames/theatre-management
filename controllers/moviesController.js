
var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function(request, response) {
  response.render("signup");
});
router.post("/users",function(request,response){
  console.log(request.body);
  response.json({output:"user created successfully"});
});
  router.post("/movies", function(request, response) {
  console.log(request.body);
  response.json({controller: "movies"});
});

module.exports = router;