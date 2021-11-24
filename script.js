var basicColors = ["green", "red", "yellow", "blue" ]
var realPattern = []
var userPattern = []
var game = false
var level = 1
currentLevel = 0
$(document).click(function(){
    if (game === false){
        gameKey()
        game = true
    }
})

$(document).keydown(function(){
    if (game === false){
        gameKey()
        game = true
    }
})

$(".btn").click(function(){
    var buttonClicked = this.id
    $("#"+buttonClicked).addClass("pressed")
    playSound(buttonClicked)
    setTimeout(function() {
        $("#"+buttonClicked).removeClass("pressed")
    }, 100)
    userPattern.push(buttonClicked)
    console.log("user "+userPattern)
    console.log("level " + currentLevel)
    currentLevel++
    checkAnswer()

    
    
})

function checkAnswer(){
    if (userPattern[currentLevel-1] === realPattern[currentLevel-1]){
        if (userPattern.length === realPattern.length){
            level++
            setTimeout(gameKey,1000)
            currentLevel = 0
        }
    }else{
        playSound("wrong")
        $("h1").text("Game over. Press any key to restart")
        game = false
        level = 1
    }
}


function gameKey(){
    $("h1").text("Level "+level)
    userPattern = []
    var randomNumber = Math.floor(Math.random()*4)
    var randomColor = basicColors[randomNumber]
    realPattern.push(randomColor)

    $("."+randomColor).fadeOut(100).fadeIn(100)
    playSound(randomColor)
}

function playSound(name) {
    new Audio("Sounds/"+ name + ".mp3").play()
    console.log("real "+realPattern)
}
