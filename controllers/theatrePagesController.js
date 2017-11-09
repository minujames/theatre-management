
var express = require("express");
var router = express.Router();
var passwordHash = require('password-hash');
var expressValidator = require("express-validator");
var moment = require("moment");

var db = require("../models");

router.get("/", function (request, response) {
  if(request.session.username){ 
    if(request.session.role === "admin"){
      response.redirect("/adminlanding");
    }
  }
  if(request.session.username){ 
    if(request.session.role === "user"){
      response.redirect("/userlanding");
    }
  }
  else{
    response.render("login");
  }
});

router.post("/", function (request, response) {
  if(request.session.username){
    response.redirect("/");
  }
  var username = request.body.username;
  var password = request.body.password;
  db.User.findOne({
    where: {
      userName: username
    }
  }).then(function (userData) {
    var hashedPassword = (userData['dataValues'].passWord);
    var role = (userData['dataValues'].role);
    var id = (userData['dataValues'].id);

    if (passwordHash.verify(password, hashedPassword) && role === 'user') {
      request.session.username = username;
      request.session.role = role;
      request.session.userId = id;
      response.redirect("/userlanding");
    }
    if (passwordHash.verify(password, hashedPassword) && role === 'admin') {
      request.session.username = username;
      request.session.role = role;
      request.session.userId = id;
      response.redirect("/adminlanding");
    } else {
      response.redirect("/");
    }
  });
});

//route for signup
router.get("/signup", function (request, response) {
  response.render("signup", {
    title: 'signup'
  });
});

router.post("/signup", function (request, response) {
  var name = request.body.name;
  var username = request.body.username;
  var hashedPassword = passwordHash.generate(request.body.password1);

  db.User.create({
    name: name,
    userName: username,
    passWord: hashedPassword,
    role: "user"
  }).then(function (tableData) {
    response.render("signupsuccessful");
  });
});

router.get("/logout",function(request,response){
  if(request.session){
    request.session.destroy();
  }
  response.redirect("/");
})

router.get("/adminlanding", function(request, response) {
  if(request.session.username){
    console.log(request.session.username);
    response.render("adminlanding",{username:request.session.username,currentmovies: "#", comingsoonmovies: "#"});
  }else{
    response.redirect("/");
  }
});

router.get("/adminadd", function(request,response){
  response.render("adminadd");
});

router.get("/userlanding", function(request, response) {
  var date = "";
  if(request.query.date === undefined){
    date = moment().format("YYYY-MM-DD");
  }
  else{
    date = request.query.date;
  }

  db.Movie.findAll({
    attributes: ['id', 'title'],
    include: [{
      model: db.Show,
      required: true,
      where: { date: date}
    }]
  }).then(function(result) {

    var movies = result;

    db.Reservation.findAll({
      where: {
        UserId: request.session.userId
      },
      include: [{
        model: db.Show,
        include: [db.Movie, db.Screen, db.ShowTime]
      }]
    }).then(function(result) {

      var reservations = result;
      response.render("userlanding", {
        movies: movies, 
        reservations: reservations,
        date: date,
        username:request.session.username,
        userId:request.session.userId,
      });
    });
  });  
});

module.exports = router;
