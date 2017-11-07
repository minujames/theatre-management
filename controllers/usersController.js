
var express = require("express");
var router = express.Router();
var passwordHash = require('password-hash');
var expressValidator = require("express-validator");

var db = require("../models");
//route for the root
router.get("/", function (request, response) {
  response.render("login");
});

router.get("/adminlanding",function(request,response){
  response.render("adminlanding");
})


//route for signup
router.get("/signup", function (request, response) {
  console.log("inside the signup route");
  response.render("signup", { title: 'signup' });
});

router.post("/signup", function (request, response) {
  console.log(request.body);
  //input validation
  // request.checkBody('username','username feild cannot be empty').notEmpty();
  // request.checkBody('username','username must be 4-15 charecters long').len(4,15);
  // request.checkBody('password1','password must be 8 to 100 charecters long').len(8,100);
  // request.checkBody('password1','password must include one lowercase letter,one uppercase letter,a number and a special charecter').matches(("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"));
  // request.checkBody('inputpassword1','password must include one lowercase letter,one uppercase letter,a number and a special charecter').matches(("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"));
  // request.checkBody('inputpassword2','password does not match').equals(request.body.password);
  // const errors = request.validationErrors();

  // if(errors){
  //   console.log(errors);
  //   response.render('signup',{title:"registration error",errors:errors});
  //   }
  var username = request.body.username;
  console.log(request.body);
  var hashedPassword = passwordHash.generate(request.body.password1);
  console.log(hashedPassword);
  db.User.create({
    name: "user1",
    userName: username,
    passWord: hashedPassword,
    role: "user"
  }).then(function (tableData) {
    console.log(tableData);
    response.render("signupsuccessful");
  });
  

});

// router.post("/users/login", function (request, response) {
//   var username = request.body.username;
//   var password = request.body.password;
//   console.log(password);

//   db.User.findOne({
//     userName: username
//   }).then(function (userData) {
//     console.log(userData['dataValues']);
//     var hashedPassword = (userData['dataValues'].passWord);
//     console.log("the hashed password is "+hashedPassword);
//     console.log(passwordHash.verify(password, hashedPassword));
//     if (passwordHash.verify(password, hashedPassword)) {
//       console.log("password match");
//       response.redirect("/adminlanding");
//     } else {
//       console.log("password not match");
//       response.render("adminadd");
//     }


//   })
// })


router.post("/", function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  
  
  db.User.findOne({
    where:
    {userName: username}
  }).then(function (userData) {
    console.log(userData['dataValues']);
    var hashedPassword = (userData['dataValues'].passWord);
    console.log("the hashed password is "+hashedPassword);
    console.log(passwordHash.verify(password, hashedPassword));
    if (passwordHash.verify(password, hashedPassword)) {
      isSuccess = true;
      console.log("password match");
      response.render("adminlanding");
    } else {
      console.log("password not match");
     response.render("login");
    }
  });
  // if(isSuccess){
  //   response.redirect("/users/adminlanding");
  // }else{
  //   response.redirect("/users/adminadd");
  // }
});

module.exports = router;