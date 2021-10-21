// Declaring variables
var score = 0;
var questionInfo = 0;

// More declared variables
var timerLeft = document.querySelector("#timerLeft");
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
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parantheses"],
        answer: "Parentheses"
    },
    {
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parantheses"],
        answer: "Parentheses"
    },
    {
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parantheses"],
        answer: "Parentheses"
    },
    {
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parantheses"],
        answer: "Parentheses"
    },
]

// Penalty timer - Ticks off this amount of time in seconds if question is answered incorrectly. ( in this case 5 seconds)
var penalty = 10;


// Creates new element
var ulNew = document.createElement("ul");

function countdown () {

    var timeLeft = 80;

    var timeInterval = setInterval(function() {
        
        if (timeLeft > 1) {
            timerLeft.textContent = timeLeft + " seconds remaining";

            timeLeft--;
        } else if (timeLeft === 1) {
            timerLeft.textContent = timeLeft + "seconds remaining";
            timeLeft--;

        } else {
            timerLeft.textContent = "";
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

// Starts timer with button click -- 
startQuiz.addEventListener("click", function() {
countdown();
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

// Add event to compare choice against the answer
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {

        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");

        // If answer is correct
        if (element.textContent === multiChoice[questionInfo].answer) {
            score++;
            newDiv.textContent = "Correct answer, the answer is " + multiChoice[questionInfo].answer;
        }
        // If wrong
        else {
            // Will deduct chosen penalty seconds off the remaining time
            timeLeft = timeLeft - penalty;
            newDiv.textContent = "Wrong answer, the correct answer is " + multiChoice[questionInfo].answer;
        }
    }
    // This will decide what # question the user is on.
    questionInfo++;

    if (questionInfo >= multiChoice.length) {
        newDiv.textContent = "The quiz is finished!" + " " + "You have answered " + score + " out of " + multiChoice.length + " Correctly";

    } else {
        render(questionInfo);
    }
    questions.appendChild(newDiv);
}

// Finished function will append the last page of the quiz
function finished() {
    questions.innerHTML = "";
    timerLeft.innerHTML = "";

    var newH1 = document.createElement("h1");
    newH1.setAttribute("id", "newH1");
    newH1.textContent = "Finished!"

    questions.appendChild(newH1);
    // Makes new paragraph
    var newP = document.createElement("p");
    newP.setAttribute("id", "newP");
    questions.appendChild(newP);

    // Calculates time remaining - Then when finished will replace it with your score from the quiz.
    if (secondsLeft >= 0) {
        var TimeLeft = timeLeft;
        var newP2 = document.createElement("p");
        clearInterval(timeInterval);
        newP.textContent = "Your final score is " + TimeLeft;
        questions.appendChild(newP2);
    }
    
}