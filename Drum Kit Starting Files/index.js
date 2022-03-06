var l = document.querySelectorAll("button");
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  l[i].addEventListener("click", clickButton);
}
function clickButton() {
  this.style.color = "white";
  switch (this.innerHTML) {
    case "w":
      var a = new Audio("sounds/crash.mp3");
      break;
    case "a":
      var a = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      var a = new Audio("sounds/snare.mp3");
      break;
    case "d":
      var a = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      var a = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      var a = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      var a = new Audio("sounds/tom-4.mp3");
      break;
  }

  a.play();
}
