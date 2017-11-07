
var express = require("express");
var router = express.Router();

var db = require("../models");
var moment = require("moment");

router.get("/login", function(request, response) {
  response.render("login");
});

router.get("/authenticate", function(request, response) {

  console.log("server....",request.body);

  response.redirect("/adminlanding");
});

router.get("/adminlanding", function(request, response) {
  response.render("adminlanding", {currentmovies: "#", comingsoonmovies: "#"});
});

router.get("/userlanding", function(request, response) {
  console.log(".....", request.params.date);
  if(request.params.date === undefined){
    request.params.date = "2017-11-15";
    // moment().format("YYYY-MM-DD");
  }
  console.log(request.params.date);

  db.Movie.findAll({
    attributes: ['id', 'title'],
    include: [{
      model: db.Show,
      required: true,
      where: { date: request.params.date}
    }]
  }).then(function(result) {

    var movies = result;

    db.Reservation.findAll({
      where: {
        UserId: '3'
      },
      include: [{
        model: db.Show,
        include: [db.Movie, db.Screen, db.ShowTime]
      }]
    }).then(function(result) {
      // response.json(result);

      var reservations = result;

      response.render("userlanding_new", {
        movies: movies, 
        reservations: reservations
      });
    });
  });

  // db.Show.findAll({
  //   where: {
  //     date : request.params.date
  //   },
  //   include: [db.Movie, db.Screen, db.ShowTime]
  // }).then(function(result) {
  //   response.render("userlanding_new", {shows: result});
  // });
  
});

router.get("/adminadd", function(request,response){
  response.render("adminadd");
});
module.exports = router;