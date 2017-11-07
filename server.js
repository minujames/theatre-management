// Importing all dependencies
var express = require("express");
var bodyParser = require("body-parser");
var expressHandleBars = require("express-handlebars");
var session = require("express-session");
var expressValidator = require("express-validator");
var movieRoutes = require("./controllers/moviesController.js");
var schedulesRoutes = require("./controllers/schedulesController.js");
var usersRoutes = require("./controllers/usersController.js");
var minuRoutes = require("./controllers/minuController.js");

// Declaring port
var port = process.env.PORT || 8080;

// Initializing express app
var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(expressValidator());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
// app.use(passport.initialize());
// app.use(passport.session());
// Setting handlebars as templating engine 
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.enable('view cache');

// Setting the root path
app.use("/movie", movieRoutes);
app.use("/schedules", schedulesRoutes);
app.use("/users", usersRoutes);
app.use("/minu", minuRoutes);

// Listening on declared port
db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});