$(document).ready(function(){

  $("#login").on("click", function(event){

    event.preventDefault();

    var userName = $("#inputusername").val().trim();
    var passWord = $("#inputpassword").val().trim();

    // $.get("/authenticate");
    //   , function( data ) {
    //   alert("hhhhooo");
    // });

    $.ajax("/authenticate", {type: "GET"});

    // $.ajax("/authenticate", {type: "GET",
    //     data: {
    //       userName: userName,
    //       passWord: passWord
    //     }
    //   });
  });

});