var express = require("express");
var router = express.Router();

var db = require("../models");


//------------------------------------------------------------------------

 // [admin add/schedule page]
 // Gets all show times
 // [GET: http://localhost:3000/theatre/api/showtime]
router.get("/api/showtime", function(request, response) {
  db.ShowTime.findAll({}).then(function(result) {
    response.json(result);
  });
});


//--------------------------------MOVIE----------------------------------------

 // [admin add/schedule page]
 // Find a movie by title
 // [GET: http://localhost:3000/theatre/api/movie/exists/moana]
router.get("/api/movie/exists/:title", function(request, response) {
  db.Movie.findAll({
    where: {
      title: request.params.title
    }
  }).then(function(result) {
    response.json(result);
  });
});


// [admin add/schedule page]
// Adds a movie to the database 
// [POST: http://localhost:3000/theatre/api/movie/]
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

// [admin landing page]
// Gets all movies that are currently running in the theatre
// [GET: http://localhost:3000/theatre/api/movie/running]
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
        [db.Sequelize.Op.between]: [db.Sequelize.fn('MIN', db.Sequelize.col('date')), 
          db.Sequelize.fn('MAX', db.Sequelize.col('date'))]
      }
    ),
    raw: true
  }).then(function(result) {
    response.json(result);
  });
});

// [admin landing page]
// Gets all movies that are scheduled for future dates
// [GET: http://localhost:3000/theatre/api/movie/comingsoon]
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

// [admin landing page] 
// Gets all movies that are unscheduled
// [GET: http://localhost:3000/theatre/api/movie/unscheduled]
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

// [user landing page] 
// Gets all movies playing on a particular date
// [GET: http://localhost:3000/theatre/api/movie/2017-11-15]
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

//-------------------------------SHOW-----------------------------------------


// [admin landing page]
// Gets all scheduled shows for a movie
// [GET: http://localhost:3000/theatre/api/show/:movieId]
router.get("/api/show/movie/:movieId", function(request, response) {
  db.Show.findAll({
    where: {
      MovieId: request.params.movieId
    },
    include: [db.Movie, db.Screen, db.ShowTime]
  }).then(function(result) {
    response.json(result);
  });
});

// [admin add/schedule page]
// Adds a show to the database 
// [POST: http://localhost:3000/theatre/api/show]
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

// [admin add/schedule page]
// Gets all scheduled shows on a screen, between the dates provided
// [GET: http://localhost:3000/theatre/api/show/2/2017-11-06/2017-11-08]
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


// [user landing page]
// Gets all shows on a particular date (optional)
// [GET: http://localhost:3000/theatre/api/show/2017-11-15]
router.get("/api/show/:date", function(request, response) {
  console.log(".....", request.params.date);
  db.Show.findAll({
    where: {
      date : request.params.date
    },
    include: [db.Movie, db.Screen, db.ShowTime]
  }).then(function(result) {
    response.json(result);
  });
});

// [user landing page] 
// Gets all shows for a movie on a particular date
// [GET: http://localhost:3000/theatre/api/show/2017-11-15/1]
router.get("/api/show/:date/:movieId", function(request, response) {
  console.log(request.params.date, request.params.movieId);

  db.Show.findAll({
    attributes: ["date","id"],
    group: ["id"],
    where: {
      date: request.params.date,
      MovieId: request.params.movieId
    },
    include: [db.Movie, db.Screen, db.ShowTime]
  }).then(function(result) {
    response.json(result);
  });
});

// [admin add/schedule page]
// Adds multiple shows to the database 
// [POST: http://localhost:3000/theatre/api/show/bulk]
router.post("/api/show/bulk", function(request, response) {
  // [{
  //   "date": "2017-11-06",
  //   "screenId": "2",
  //   "MovieId": "3",
  //   "showtimeId": "1"
  // },
  // {
  //   "date": "2017-11-06",
  //   "screenId": "2",
  //   "MovieId": "3",
  //   "showtimeId": "2"
  // }]

  db.Show.bulkCreate(request.body.shows).then(function(result) {
    response.json(result);
  });
});

//------------------------------RESERVATION------------------------------------------

// [User reservation]
// Creates a new reservation for user
// [POST: http://localhost:3000/theatre/api/reservation]
router.post("/api/reservation", function(request, response){
  // {
  //   "UserId": "3",
  //   "ShowId": "16",
  //   "seatsReserved": "5"
  // }
  console.log(request.body);
  db.Reservation.create(request.body).then(function(result) {
    response.json(result);
  });
});

// [User reservation]
// Get all reservations for a user
// [POST: http://localhost:3000/theatre/api/reservation/3]
router.get("/api/reservation/:userId", function(request, response){
  db.Reservation.findAll({
    where: {
      UserId: request.params.userId
    },
    include: [{
      model: db.Show,
      include: [db.Movie, db.Screen, db.ShowTime]
    }]
  }).then(function(result) {
    response.json(result);
  });
});

// [User reservation]
// Get remaining seats for a show
// [GET: http://localhost:3000/theatre/api/reservation/seats/remaining/16]
router.get("/api/reservation/seats/remaining/:showId", function(request, response){
  db.Reservation.findAll({
    attributes: [[db.Sequelize.fn('SUM', db.Sequelize.col('seatsReserved')), "seatsReserved"]],
    group: ["ShowId"],
    where: {
      ShowId: request.params.showId
    },
    include: [db.Show]
  }).then(function(result) {
    console.log(result[0].dataValues.seatsReserved, result[0].Show.screenId);

    var reservedSeats = parseInt(result[0].dataValues.seatsReserved);
    db.Screen.find({
      attribute: ["seats"],
      where: {
        id: result[0].Show.screenId
      }
    }).then(function(result) {
      var totalSeats = parseInt(result.dataValues.seats);
      response.json({remainingSeats: totalSeats - reservedSeats});
    });
  });
});


// [User reservation]
// Get remaining seats for a list of shows
// [GET: http://localhost:3000/theatre/api/reservation/seats/remaining?showIds=16,17]
router.get("/api/reservation/seats/remaining", function(request, response){
  var showIds = (request.query.showIds).split(",");
  console.log(showIds);

  db.Reservation.findAll({
    attributes: [[db.Sequelize.fn('SUM', db.Sequelize.col('seatsReserved')), "seatsReserved"]],
    group: ["ShowId"],
    where: {
      ShowId: {
        [db.Sequelize.Op.in] : showIds
      }
    },
    include: [{
      model: db.Show,
      include: [db.Screen]
    }]
  }).then(function(result){

    var resultArray = [];

    result.forEach(function(show){
      var showObj = {
        availableSeats: parseInt(show.dataValues.Show.Screen.seats) - parseInt(show.dataValues.seatsReserved),
        seatsReserved : show.dataValues.seatsReserved,
        showId: show.dataValues.Show.id,
        screenName: show.dataValues.Show.Screen.name,
        screenId: show.dataValues.Show.Screen.id,
        totalSeats: show.dataValues.Show.Screen.seats,
        date: show.dataValues.Show.date,
        movieId: show.dataValues.Show.MovieId
      } 
      resultArray.push(showObj);
    })
    response.json(resultArray);
  });
});


module.exports = router;