var express = require("express");
var router = express.Router();

var db = require("../models");

// api/showtime
router.get("/api/showtime", function(request, response) {
  db.ShowTime.findAll({
    raw: true
  }).then(function(result) {
    response.json(result);
  });
});


// api/movie/
router.post("/api/movie", function(request, response) {
  // {
  //   "title": "moana",
  //   "releaseYear": "2016"
  // }
  console.log(request.body);
  db.Movie.create(request.body).then(function(result) {
    response.json(result);
  });
});


// api/show
router.post("/api/show", function(request, response) {
  // {
  //   "date": "2017-11-06",
  //   "screenId": "2",
  //   "MovieId": "3",
  //   "showtimeId": "1"
  // }
  console.log(request.body);
  db.Show.create(request.body).then(function(result) {
    response.json(result);
  });
});


// api/show/2/2017-11-06/2017-11-08
router.get("/api/show/:screenId/:startDate/:endDate", function(request, response) {
  console.log(request.params.screenId, request.params.startDate, request.params.endDate);

  db.Show.findAll({
    where: {
      screenId: request.params.screenId,
      date: {
        [db.Sequelize.Op.between]: [request.params.startDate, request.params.endDate],
      }
    },
    include: [db.Movie, db.Screen, db.ShowTime],
    raw: true
  }).then(function(result) {
    response.json(result);
  });
});


// movie/running/2017-11-15
router.get("/api/movie/running/:currentDate", function(request, response) {
  
});


//movie/comingup/2017-11-15
router.get("/api/movie/comingsoon/:currentDate", function(request, response) {
  
});


// movie/2017-11-15
router.get("/api/movie/:date", function(request, response) {
  db.Movie.findAll({
    attributes: [db.Sequelize.fn('DISTINCT', db.Sequelize.col('title')), 'id'],
    include: [{
      model: db.Show,
      required: true,
      where: { date: request.params.date},
      attributes: [],
    }],
    raw:true
  }).then(function(result) {
    response.json(result);
  });
});



module.exports = router;