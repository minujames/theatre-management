 $(document).ready(function() {
  var selectedDate = $("#date").data("date");
  $("#date").val(selectedDate);

  $('#date').datepicker({
    todayHighlight: true,
    format: 'yyyy-mm-dd',
    startDate: '0',
    autoclose: true
  }).on('changeDate', function(e) {
    var dateSelected = $("#date").val().trim();
    var windowUrl = window.location.href.split("?")[0];
    var url = windowUrl + "?date=" + dateSelected ;
    window.location.href = url;
  });

  $("li.movie").on("click", function(event){
    var id = $(this).data("id");
    var title = $(this).data("title");
    
    $.ajax({
      url: "https://www.omdbapi.com/?t=" + title + "&y=&plot&apikey=40e9cece",
      method: "GET"
    }).done(function(response) {
      $("#summaryDiv").empty();

      var div = $("<div>");
      var img = $("<img>").attr("src", response.Poster);
      var title = $("<h3>").addClass("title").text(response.Title);
      var releaseDate = $("<span>").text("Release Date: " + response.Released);
      var rated = $("<span>").text(" | Rated: " + response.Rated);
      var plot = $("<p>").html(response.Plot);
      var btn = $("<btn class='btn btn-primary viewSchedule'>").text("View Schedule").attr("data-movieid", id);
      var btnDiv = $("<div>").append(btn);
      div.append(img, title, releaseDate, rated, plot, btnDiv);

      $("#summaryDiv").append(div);
    });
  });

  $(document).on("click", ".viewSchedule", function(){
    var movieId = $(this).data("movieid");
    var date = $("#date").val().trim();

    $.get( "/theatre/api/show/" + date + "/" + movieId , function(data) {
      displayShows(data);
    });

  });

  function displayShows(data){
    var shows = $("<ul class='list-group'>");

    var showIdsArray = [];
    data.forEach(function(showObj){
      showIdsArray.push(showObj.id);
    });
    var showIdsStr = showIdsArray.join(",");

    $.get( "/theatre/api/reservation/seats/remaining?showIds=" + showIdsStr , function(result) {

      data.forEach(function(showObj){
        var show = $("<li class='list-group-item'>").attr("data-showId", showObj.id);

        var availableSeats = "";
        for(let showSeatRemainig of result){
          if(showObj.id === showSeatRemainig.showId){
            availableSeats = showSeatRemainig.availableSeats;
            break;
          }
        }

        if("" === availableSeats){
          availableSeats = showObj.Screen.seats;
        }

        var dateSection = $("<section>").text(showObj.date);
        var screenSection = $("<h5>").text(showObj.Screen.name + " : " + showObj.ShowTime.name);
        var seatsRemaining = $("<h5>").text("Available seats: " + availableSeats).attr({
          "data-available-seats": availableSeats, "id": showObj.id + "-available"});
        var btnReserve = $("<button class='btn btn-primary reserveBtn'>").text("Reserve Seats");
        
        show.append(dateSection, screenSection, seatsRemaining);
        if(parseInt(availableSeats) <= 0){
          show.append($("<div class='houseFull'>").text("House Full"));
        }
        else{
          show.append(btnReserve);
        }
        shows.append(show);
      });

      $(".modal-body").html(shows);
      $("#showsModal").modal('toggle');
    });
  }

  $(document).on("click", ".reserveBtn", function(event){
    $(this).hide();
    var showId = $(this).parent().attr("data-showId");

    $(this).parent().append($("<input>").attr("id", showId+"-seats"));
    $(this).parent().append($("<button class='submitSeats'>").text("Submit"));
  });

  $(document).on("click", ".submitSeats" ,function(event){

    event.preventDefault();
    var showId = $(this).parent().attr("data-showId");
    var seatsToReserve = $("#" + showId + "-seats").val().trim();
    var availableSeats = $("#" + showId + "-available").attr("data-available-seats");

    if(parseInt(seatsToReserve) > parseInt(availableSeats)){
      $("#" + showId + "-seats").val('');
    }
    else{
      var userId = $("#userIdInput").attr("data-userid");
      $.ajax("/theatre/api/reservation", {
        type: "POST",
        data: {
          UserId: userId,
          ShowId: showId,
          seatsReserved: seatsToReserve
        }
      }).then(function(data){
        location.reload();
      });
    }
  });
});