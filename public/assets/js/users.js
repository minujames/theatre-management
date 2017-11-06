$("#login").on("click",function(event){
    event.preventDefault();
    debugger;
   var username =  $("#inputusername").val().trim();
   console.log(username);
   var password1 = $("#inputpassword1").val().trim();
   var password2 = $("#inputpassword2").val().trim();
   var userValues = {
       username:username,
       password:password
   };
   
//    $.post("/users",userValues,function(request,response){
//        console.log("made the post request");
//        console.log(response.body);
//    });
    });

    