
var express = require("express");
var router = express.Router();

var db = require("../models");

<<<<<<< HEAD
router.get("/", function(request, response) {
  response.render("signup");
});
router.post("/users",function(request,response){
  console.log(request.body);
  response.json({output:"user created successfully"});
=======
router.post("/movies", function(request, response) {
  console.log(request.body);
  response.json({controller: "movies"});
>>>>>>> dd09d2cd2ad03a46c2391578f0f5a7834ceb30e1
});

module.exports = router;