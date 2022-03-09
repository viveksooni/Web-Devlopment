var level = 1;
var s = Math.floor(Math.random() * 4) + 1;
$(document).keypress(function () {
  $("h1").text("Level " + level);
  switch (s) {
    case 1:
      var a = new Audio("sounds/blue.mp3");
      break;
    case 2:
      var a = new Audio("sounds/red.mp3");
      break;
    case 3:
      var a = new Audio("sounds/green.mp3");
      break;
    case 4:
      var a = new Audio("sounds/yellow.mp3");
      break;
  }
  a.play();
});


