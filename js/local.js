var events = {
  "tableheader": "Things are Afoot",
  "events": [
    {
      "date":"3/4/12",
      "event":"Soil Workshop"
    },
    {
      "date":"4/4/12",
      "event":"Snail Killing"
    },
    {
      "date":"5/4/12",
      "event":"Flower Courting"
    },
    {
      "date":"6/4/12",
      "event":"Vegetable Workshop"
    }
  ]
};

events.display = function() {
  $(".table-header").append('<h3>' + events.tableheader + '</h3>');
  
  for (var i = 0, len = events.events.length; i < len; i++) {
    var row = "";
    for (var prop in events.events[i]) {
      if (prop === "date")
        row += '<tr><td>' + events.events[i][prop] + '</td>';
      if (prop === "event")
        row += '<td>' + events.events[i][prop] + '</td></tr>';
    }
    $(".event-table tbody").append(row);
  }
};

events.display();

var news = {
  "header":"These are the Happs:",
  "news": [
    "We have a new nursery cat",
    "Fall is coming",
    "Bulbs will arrive soon",
    "New store hours"
  ]
}

news.display = function() {
  $(".whatisnew header").text(news.header);
  for (var i = 0, len = news.news.length; i < len; i++) {
    var item = '<li>' + news.news[i] + '</li>';
    $("aside ul").append(item);
  }
};

news.display();

$(document).ready(function() {
  $("h1").fadeTo(4000, 0.5);
});





