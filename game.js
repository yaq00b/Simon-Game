
var btnColors = ["red", "yellow", "green", "blue"];
var chosenColor = [];
var userChosen = [];
var l = 0;
var level = "Level ";
var start = false;


$(document).keydown(function(){

    if(!start)
{
    $("#level-title").text(level + l);
    nextSequence();
    start = true;
}
});


   $(".btn").click(function(){
        var userKeyPressed = $(this).attr("id");
        userChosen.push(userKeyPressed);
        var p = "#" + userKeyPressed;
        animateBtn(p);
        playSound(userKeyPressed);
        userInput(userChosen.length-1);
    });


function userInput(len)
{


    if (userChosen[len] === chosenColor[len])
    {
        console.log("success");
        if(userChosen.length === chosenColor.length)
        {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else
    {
        console.log("wrong");
        $("h1").text("Game Over, Press A Key to Start");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        }, 100);
        failSequence();
    }
    
            
}

function failSequence()
{
    l = 0;
    start = false;
    chosenColor = [];
}


function nextSequence () 
{  
   // alert("new seq");
   userChosen = [];    
   l++;
   level = "level " + l;
    $("h1").text(level);
    var randomNumber = Math.floor(Math.random()*3);
    chosenColor.push(btnColors[randomNumber]);
    var c = "#" + btnColors[randomNumber];
    $(c).fadeOut(100).fadeIn(100);
    playSound(btnColors[randomNumber]);
}

function animateBtn(p)
{
    $(p).addClass("pressed");
    setTimeout(function(){
    $(p).removeClass("pressed");
    }, 100);
}

function playSound (s)
{
    switch(s)
    {
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;

        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;

        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;

        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        
        case "wrong":
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            break;

        default: 
            console.log(s);
    }


}
