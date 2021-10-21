// Variables
var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var clear = document.querySelector("#clear");

// Event listener clearing the scores
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// Grabs the local storage below
var HighScores = localStorage.getItem("HighScores");
HighScores = JSON.parse(HighScores);

if (HighScores !== null) {
    for (var i=0; i < HighScores.length; i++) {
        // creates new line for the highscores
        var newLi = document.createElement("li");
        newLi.textContent = HighScores[i].initials + " " + HighScores[i].score;
        
    }
}