$(document).ready(function(){

  var current;
  var comingsoon;

  $.get("theatre/api/movie/running", function(data) {
    current = data;
    current.forEach(function(e) {
      var temp = $("<button>").attr("class", "list-group-item text-left adminMovieListItem").attr("data-value", e.title).attr("data-id", e.id).html("<h5>" + e.title + "</h5>");
      $("#current").append(temp);
    })
  })

  $.get("theatre/api/movie/comingsoon", function(data) {
    comingsoon = data;
    comingsoon.forEach(function(e) {
      var temp = $("<button>").attr("class", "list-group-item text-left adminMovieListItem").attr("data-value", e.title).attr("data-id", e.id).html("<h5>" + e.title + "</h5>");
      $("#comingsoon").append(temp);
    })
  })

  function enable() {    
    $(".adminMovieListItem").on("click", function(event) {
      event.preventDefault();
      
      var temp = $(this).attr("data-value")
      $.get("/theatre/api/show/movie/" + $(this).attr("data-id"), function(data) {
        var schedule = data;
        $("#tableScreen1").empty();
        $("#tableScreen2").empty();

        var title = $("<p>").html("Showtimes for: " + temp).addClass("adminHeaders", "animated flash");
          $("#adminLandingScreenMovieTitle").html(title)
          schedule.forEach(function(e) {
            var newrow = $("<tr>")
            var date = $("<td>").html("<h5>"+e.date+"</h5>")
            var time = $("<td>").html("<h5>"+e.ShowTime.name+"</h5>")
            newrow.append(date, time)
            if (e.screenId === 1) {
              $("#tableScreen1").append(newrow)
            } else {
              $("#tableScreen2").append(newrow)
            }
          })
        })
    })
  }

  var title = $("<p>").html("Select a title to view showtimes").addClass("adminHeaders", "animated flash");
  $("#adminLandingScreenMovieTitle").html(title)
  setTimeout(enable, 200);
});