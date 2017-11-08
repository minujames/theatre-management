
var express = require("express");
var router = express.Router();

var db = require("../models");
var moment = require("moment");

// router.get("/login", function(request, response) {
//   response.render("login");
// });

// router.get("/authenticate", function(request, response) {

//   response.redirect("/adminlanding");
// });

router.get("/adminlanding", function(request, response) {
  if(request.session.username){
    console.log(request.session.username);
    response.render("adminlanding",{username:request.session.username,currentmovies: "#", comingsoonmovies: "#"});
    }else{
      response.redirect("/");
    }
    //response.render("adminlanding", {currentmovies: "#", comingsoonmovies: "#"});
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
      response.render("userlanding_new", {
        movies: movies, 
        reservations: reservations,
        date: date,
        username:request.session.username,
        userId:request.session.userId,
      });
    });
  });  
});

router.get("/adminadd", function(request,response){
  response.render("adminadd");
});
module.exports = router;