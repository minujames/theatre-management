// $(document).ready(function(){


//   $("#login").on("click", function(event){

//     event.preventDefault();

//     var userName = $("#inputusername").val().trim();
//     var passWord = $("#inputpassword").val().trim();

//     // $.get("/authenticate");
//     //   , function( data ) {
//     //   alert("hhhhooo");
//     // });

//     $.ajax("/authenticate", {type: "GET"});

//     // $.ajax("/authenticate", {type: "GET",
//     //     data: {
//     //       userName: userName,
//     //       passWord: passWord
//     //     }
//     //   });
//   });

// // alert("hey you are here");

// // $("#signup").on("click",function(event){
// //     event.preventDefault();
// //     //debugger;
// //    var username =  $("#inputusername").val().trim();
// //    console.log(username);
// //    var password1 = $("#inputpassword1").val().trim();
// //    var password2 = $("#inputpassword2").val().trim();
// //    var userValues = {
// //        username:username,
// //        password:password1
// //    };
// // console.log(userValues);
// //    $.get("/users/signup",function(request,response){
// //     console.log(response.body);
// // })
   
// //    $.post("/users/signup",userValues,function(request,response){
// //        console.log("made the post request");
// //         if(response === "success"){
// //             alert("data has been inserted successfully");
// //         }
// //         else{
// //             alert("there was an error"+response);
// //         }
// //    });
// //     });

// // $("#login").on("click",function(event){
// //     event.preventDefault();
// //     var username =  $("#inputusername").val().trim();
// //     var password =  $("#inputpassword").val().trim();
// //     var userValues = {
// //         username:username,
// //         password:password
// //     };
// //     $.post("/users",userValues,function(request,response){
// //         console.log(response);
// //     })
// // })


// });