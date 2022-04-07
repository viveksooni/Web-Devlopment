var buttonColours = ["red", "blue", "green", "yellow"];
var level =1;

var gamePattern = [];
var userClick=[];
// playSound("red");
// addSeq();
$(".btn").click(function(event){
    var colorChosen = $(this).attr("id");
    
    userClick.push(colorChosen);
    
    playSound(colorChosen);
    animate(colorChosen);
    animatePress(colorChosen);
});

function addSeq() {

        var num = Math.floor(Math.random()*4);
        var btn =buttonColours[num];

        gamePattern.push(btn);

        playSound(btn);

        animate(btn);
        
}

function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
        
    audio.play();
}

function animate(btn)
{$("#"+btn).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);}

function animatePress(btn)
{
    
        $("#"+btn).addClass("pressed");

        setTimeout(function(){$("#"+btn).removeClass("pressed")},100);
    
}