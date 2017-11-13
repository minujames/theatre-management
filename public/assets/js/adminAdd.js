$(document).ready(function(){

  function reset() {
    $("#scheduletable").hide();
    $("#addbutton").hide();
    $("#schedulebutton").hide();
    $("#addmoviesection").hide();
  }

  function createTable(screen, start, end, data) {
    $("#newtablerowshere").empty();
    var startDate = new Date(start);
    var endDate = new Date(end);
    for (var i = startDate; i <= endDate; i = new Date(i.setDate(i.getDate() + 1))) {
      var currdate = (i.getMonth() + 1) + "-" + (i.getDate() + 1) + "-" +  i.getFullYear();
      var time1 = $("<button>").attr("class", "sche btn btn-default").attr("data-date", currdate).attr("data-time", 1).attr("data-screen", screen).text(currdate + " 9:00am");
      var time2 = $("<button>").attr("class", "sche btn btn-default").attr("data-date", currdate).attr("data-time", 2).attr("data-screen", screen).text(currdate + " 2:00pm");
      var time3 = $("<button>").attr("class", "sche btn btn-default").attr("data-date", currdate).attr("data-time", 3).attr("data-screen", screen).text(currdate + " 6:00pm");
      data.forEach(function(e) {
        var nextdate = new Date(e.date)
        var nextdate1 = ((nextdate.getMonth() + 1) + "-" + (nextdate.getDate() + 1) + "-" +  nextdate.getFullYear());
        if (nextdate1 === currdate && e.Screen.id === parseInt(screen)) {
          switch (e.showtimeId) {
            case 1:
            time1 = $("<h3>").text(e.Movie.title);
            break;
            case 2:
            time2 = $("<h3>").text(e.Movie.title);
            break;
            case 3:
            time3 = $("<h3>").text(e.Movie.title);
            break;
          }
        }
      })
      var newrow = $("<tr>")
      var tablestart = $("<td>").text((i.getMonth() + 1) + "-" + (i.getDate() + 1) + "-" +  i.getFullYear());
      var tabletime1 = $("<td>").html(time1);
      var tabletime2 = $("<td>").html(time2);
      var tabletime3 = $("<td>").html(time3);
      newrow.append(tablestart, tabletime1, tabletime2, tabletime3);
      $("#newtablerowshere").append(newrow);
    }
    enable();
  }

  var globalTitle;
  var globalreleaseYear;
  var globalMovieId;

  $("#getinfobutton").on("click", function(event) {
    event.preventDefault();
    reset();
    $("#movieinfohere").empty();
    var movie = $("#movietitle").val().trim();
    $("#movietitle").val("")

    $.ajax({
      url: "https://www.omdbapi.com/?t=" + movie + "&y=&plot&apikey=40e9cece",
      method: "GET"
    }).done(function(response) {
      if (response.Title === undefined) {
        return
      } else {
        $("#movieposterhere").attr("src", response.Poster);
        var title = $("<li>").html("<h4>Title: " + response.Title + "</h4>");
        var runtime = $("<li>").html("<h4>Runtime: " + response.Runtime + "</h4>");
        var release = $("<li>").html("<h4>Release Date: " + response.Released + ", Rating: " + response.Rated + "</h4>");
        var genre = $("<li>").html("<h4>Genre: " + response.Genre);
        var actors = $("<li>").html("<h4>Actors: " + response.Actors + "</h4>");
        var plot = $("<li>").html("<h4>Plot: " + response.Plot + "</h4>");
        $("#movieinfohere").append(title, runtime, release, genre, actors, plot);
        $("#movietoadd").text("Scheduling " + response.Title).attr("class", "animated flash");
        globalTitle = response.Title;
        globalreleaseYear = response.Year;
        var added = false;
        $.get("theatre/api/movie/exists/" + (response.Title).toLowerCase(), function(data) {
          if (data.length > 0) {
            added = true
            if (added === true) {
              $("#schedulebutton").show();
            } else {
              $("#addbutton").show();
            }
          } else if (added === true) {
            $("#schedulebutton").show();
          } else {
            $("#addbutton").show();
          }
        })
      }
    })
  })

  $("#addbutton").on("click", function(event) {
    event.preventDefault();
    $.post("/theatre/api/movie/", {title: globalTitle, releaseYear: globalreleaseYear}, function(data) {
      $("#addbutton").hide();
      $("#schedulebutton").show();
    })
  })

  $("#schedulebutton").on("click", function(event) {
    event.preventDefault();
    $("#addmoviesection").show();
    $.get("/theatre/api/movie/exists/" + globalTitle, function(data) {
      globalMovieId = data[0].MovieId;
    })
  })

  $("#checkschedulebutton").on("click", function(event) {
    event.preventDefault();
    var screen = $("#screenselect").val();
    var start = $("#startselect").val();
    var end = $("#endselect").val();
    var url = "/theatre/api/show/" + screen + "/" + start + "/" + end
    $.get(url, function(data) {
      createTable(screen, start, end, data);
    })
    $("#scheduletable").show();
  })

  function enable() {
    $(".sche").unbind("click").on("click", function(event) {
      event.preventDefault();
      if($(this).hasClass("btn-default")) {
        $(this).removeClass("btn-default");
        $(this).addClass("btn-danger");
      } else if($(this).hasClass("btn-danger")) {
        $(this).addClass("btn-default");
        $(this).removeClass("btn-danger");
      }
    })
  }

  $("#submitschedule").on("click", function(event) {
    event.preventDefault();

    var objArray = [];

    $.get("theatre/api/movie/exists/" + globalTitle, function(data) {
      $(".btn-danger").each(function() {
        var tempdate = $(this).attr("data-date");
        var temptime = $(this).attr("data-time");
        var tempscreen = $(this).attr("data-screen");

        var tempobj = {MovieId: data[0].id, date: tempdate, showtimeId: temptime, screenId: tempscreen};
        objArray.push(tempobj);
      });

      if(objArray.length > 0){
        $.post("/theatre/api/show/bulk", {shows: objArray}, function(insertedShows) {
          location.reload();
        });
      }
    });
  });

  reset();
});