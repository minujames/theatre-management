// Importing all dependencies
var express = require("express");
var bodyParser = require("body-parser");
var expressHandleBars = require("express-handlebars");

var movieRoutes = require("./controllers/moviesController.js");
var schedulesRoutes = require("./controllers/schedulesController.js");
var usersRoutes = require("./controllers/usersController.js");
var minuRoutes = require("./controllers/minuController.js");
var fasRoutes = require("./controllers/fasController.js")

// Declaring port
var port = process.env.PORT || 3000;

// Initializing express app
var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Setting handlebars as templating engine 
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.enable('view cache');

// Setting the root path
app.use("/", movieRoutes);
app.use("/", schedulesRoutes);
app.use("/", usersRoutes);

// app.use("/minu", minuRoutes);
app.use("/", fasRoutes);

app.use("/theatre", minuRoutes);


// Listening on declared port
db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});