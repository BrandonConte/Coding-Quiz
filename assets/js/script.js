// Declaring variables
var score = 0;
var questionInfo = 0;

// More declared variables
var timeLeft = document.querySelector("#timeLeft");
var startQuiz = document.querySelector("#startQuiz");
var wrapper = document.querySelector("#wrapper");
var questions = document.querySelector("#questions");

// Putting questions below
var multiChoice = [
    {
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parantheses"],
        answer: "Parentheses"
    },
    {

    }
]

// Total time of the quiz
var secondsLeft = 81;

// Penalty timer - Ticks off this amount of time in seconds if question is answered incorrectly. ( in this case 5 seconds)
var penalty = 5;

// Interval timer - Will be added below with if statements
var timeInterval = 0;

// Creates new element
var ulNew = document.createElement("ul");

// Starts timer with button click -- 
startQuiz.addEventListener("click", function() {
    
    if (timeInterval === 0) {
        timeInterval = setInterval(function() {
            secondsLeft--;
            timeLeft.textContent = "Time:" + secondsLeft;
            // When time hits 0 will end quiz and say times up
            if (secondsLeft = 0) {
                clearInterval(timeInterval);
                timeLeft.textContent = "Time's up";
            }
        }, 1000);
    }
    
})

function render(questionInfo) {
     // clear current saved data
     questions.innerHTML = "";
     ulNew.innerHTML = "";
    // For loop that runs through all the info within the array
     for (var i = 0; i < multiChoice.length; i++) {
         // Appends multichoice options 
         var userInquiry = multiChoice[questionInfo].inquiry;
         var userChoices = multiChoice[questionInfo].choice;
         questions.textContent = userInquiry;
     }
     // Creaters a new one for each question choice. 
     userChoices.forEach(function (newQ) {
         var listQ = document.createElement("li");
         listQ.textContent = newQ;
         questions.appendChild(ulNew);
         ulNew.appendChild(listQ);
         listQ.addEventListener("click", (compare));
     })
    
}