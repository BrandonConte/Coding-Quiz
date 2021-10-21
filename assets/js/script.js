// Declaring variables
var score = 0;
var questionInfo = 0;

// More declared variables
var timerLeft = document.querySelector("#timerLeft");
var timer = document.querySelector("#startQuiz");
var wrapper = document.querySelector("#wrapper");
var questions = document.querySelector("#questions");

// Putting questions below
var multiChoice = [
    {
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parentheses"],
        answer: "Parentheses"
    },
    {
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parentheses"],
        answer: "Parentheses"
    },
    {
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parentheses"],
        answer: "Parentheses"
    },
    {
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parentheses"],
        answer: "Parentheses"
    },
    {
        inquiry: "Strings must be enclosed in what to be assigned to a variable(s).",
        choice: ["Curly Brackets", "Square Brackets", "Quotes", "Parentheses"],
        answer: "Parentheses"
    },
];

// Penalty timer - Ticks off this amount of time in seconds if question is answered incorrectly. ( in this case 5 seconds)
var penalty = 15;
var timeLeft = 80;
var holdInterval = 0;

// Creates new element
var ulNew = document.createElement("ul");

timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() { 
            timeLeft--;
            timerLeft.textContent = "Time Remaining: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                finished();
                timerLeft.textContent = "time's up!";
            }
        }, 1000);
    }
    render(questionInfo);
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
        finished();
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
    if (timeLeft >= 0) {
        var TimeLeft = timeLeft;
        var newP2 = document.createElement("p");
        clearInterval(holdInterval);
        newP.textContent = "Your final score is " + TimeLeft;
        questions.appendChild(newP2);
    }
    // Creates new label
    var newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Please enter your initials here: ";
    questions.appendChild(newLabel);

     // Input fields
     var newInput = document.createElement("input");
     newInput.setAttribute("type", "text");
     newInput.setAttribute("id", "initials");
     newInput.textContent = "";
     questions.appendChild(newInput);

    // submit button
    var newSubmit = document.createElement("button");
    newSubmit.setAttribute("type", "submit");
    newSubmit.setAttribute("id", "Submit");
    newSubmit.textContent = "Submit";
    questions.appendChild(newSubmit);

   

    // .addEventListener on click that saves initials and saves to local storage. 
    newSubmit.addEventListener("click", function() {
        var initials = newInput.value;
        if (initials === null) {

        }
        else {
            var finalScore = {
                initials: initials,
                score: TimeLeft
            }
            var HighScores = localStorage.getItem("HighScores");
            if (HighScores === null) {
                    HighScores = [];
            }
            else {
                HighScores = JSON.parse(HighScores);
            }
            HighScores.push(finalScore);
            var newScore = JSON.stringify(HighScores);
            localStorage.setItem("HighScores", newScore);

            // Brings user to last page (Highscores)
            window.location.replace("./HS.html")
        }
    })
}