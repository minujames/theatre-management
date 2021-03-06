// Importing all dependencies
var express = require("express");
var bodyParser = require("body-parser");
var expressHandleBars = require("express-handlebars");
var session = require('client-sessions');
var expressValidator = require("express-validator");

var theatreAPIRoutes = require("./controllers/theatreAPIController.js");
var theatrePagesRoutes = require("./controllers/theatrePagesController.js");

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
  cookieName: 'session',   
	duration: 30 * 60 * 1000,    
	activeDuration: 5 * 60 * 1000,
}));

// Setting handlebars as templating engine 
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", theatrePagesRoutes);
app.use("/theatre", theatreAPIRoutes);

// Listening on declared port
db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});