var express = require("express");
var router = express.Router();

var db = require("../models");

// api/showtime
router.get("/api/showtime", function(request, response) {
  db.ShowTime.findAll({}).then(function(result) {
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
    include: [db.Movie, db.Screen, db.ShowTime]
  }).then(function(result) {
    response.json(result);
  });
});


// movie/running
router.get("/api/movie/running", function(request, response) {
  db.Movie.findAll({
    group: ["id"],
    include: [{
      model: db.Show,
      required: false,
      attributes: [
        [db.Sequelize.fn('MIN', db.Sequelize.col('date')), "minDate"],
        [db.Sequelize.fn('MAX', db.Sequelize.col('date')), "maxDate"],
      ],
    }],
    having: db.Sequelize.where(
      db.Sequelize.fn('now'), {
        [db.Sequelize.Op.between]: [db.Sequelize.fn('MIN', db.Sequelize.col('date')), db.Sequelize.fn('MAX', db.Sequelize.col('date'))]
      }
      // db.Sequelize.fn('MIN', db.Sequelize.col('date')), {
      //   $lte: request.params.currentDate
      // }
    ),
    raw: true
  }).then(function(result) {
    response.json(result);
  });
});


// movie/comingsoon/scheduled
router.get("/api/movie/comingsoon", function(request, response) {
  db.Movie.findAll({
    group: ["id"],
    include: [{
      model: db.Show,
      required: false,
      attributes: [
        [db.Sequelize.fn('MIN', db.Sequelize.col('date')), "minDate"],
        [db.Sequelize.fn('MAX', db.Sequelize.col('date')), "maxDate"],
      ],
    }],
    having: db.Sequelize.where(
      db.Sequelize.fn('now'), {
        [db.Sequelize.Op.lt]: db.Sequelize.fn('MIN', db.Sequelize.col('date'))
      }
    ),
    raw: true
  }).then(function(result) {
    response.json(result);
  });
});

//movie/comingsoon/unscheduled
router.get("/api/movie/unscheduled", function(request, response) {
  db.Movie.findAll({
    group: ["id"],
    include: [{
      model: db.Show,
      required: false,
      attributes: [
        [db.Sequelize.fn('MIN', db.Sequelize.col('date')), "minDate"],
        [db.Sequelize.fn('MAX', db.Sequelize.col('date')), "maxDate"],
      ],
    }],
    having: db.Sequelize.where(
      db.Sequelize.fn('MIN', db.Sequelize.col('date')), {
        [db.Sequelize.Op.eq]: null
      }
    ),
    raw: true
  }).then(function(result) {
    response.json(result);
  });
});


// [user page] movies playing on a particular date
// /api/movie/2017-11-15
router.get("/api/movie/:date", function(request, response) {
  db.Movie.findAll({
    attributes: ['id', 'title'],
    include: [{
      model: db.Show,
      required: true,
      where: { date: request.params.date}
      // attributes: [],
    }]
  }).then(function(result) {
    response.json(result);
  });
});


// [user page] shows for a movie on a particular date
// /api/show/2017-11-15/1
router.get("/api/show/:date/:movieId", function(request, response) {
  console.log(request.params.date, request.params.movieId);

  db.Show.findAll({
    attributes: ["date"],
    where: {
      date: request.params.date,
      MovieId: request.params.movieId
    },
    include: [db.Movie, db.Screen, db.ShowTime]
  }).then(function(result) {
    response.json(result);
  });
});

module.exports = router;