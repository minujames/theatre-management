
var express = require("express");
var router = express.Router();

router.get("", function(request,response){
  response.render("userlanding");
});

router.get("/addmovie", function(request,response){
  response.render("addmovie");
});

router.get("/adminadd", function(request,response){
  response.render("adminadd");
});

router.get("/adminlanding", function(request,response){
  response.render("adminlanding");
});

router.get("/login", function(request,response){
  response.render("login");
});

router.get("/signup", function(request,response){
  response.render("signup");
});

// router.get("/userlanding", function(request,response){
//   response.render("userlanding");
// });

module.exports = router;
  
  