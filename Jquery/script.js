$("h1").text("bye");

$("h1").addClass("big");

// $("button").click(function(){
//     $("h1").css("color","pink")
//     // $("h1").css("color","blue")
//     // setTimeout(function(){$("h1").css("color","blueviolet")},100);
// })

$(document).keypress(function(event){
    var k = event.key;
    $("h1").text(k);
});

$("h1").on("mouseenter",function(){
    $("h1").css("color","red");
    setTimeout(function(){
        $("h1").css("color","blueviolet");
    },200)
});

$("button").click(function(){
    $("h1").fadeToggle();
})