// Declaring variables
var score = 0;
var questionInfo = 0;

// More declared variables
var timeLeft = document.querySelector("#timeLeft");
var startQuiz = document.querySelector("#startQuiz");
var wrapper = document.querySelector("#wrapper");
var questions = document.querySelector("#questions");

// Total time of the quiz
var secondsLeft = 81;

// Penalty timer - Ticks off this amount of time in seconds if question is answered incorrectly. ( in this case 5 seconds)
var penalty = 5;

// Interval timer - Will be added below with if statements
var timeInterval = 0;





// Starts timer with button click -- 
startQuiz.addEventListener("click", function() {
    
})