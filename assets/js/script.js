// timer:
var timeEl = document.querySelector(".timer");
var secondsLeft = 10;

function startTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: "+ secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        console.log("test timer");
      }
  
    }, 1000);
  }

startTimer();

function Question(label, answers, correctAnswer) {
    // properties:
    this.label = label;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

    // methods:
    this.displayQuestion = function() {
        //dynamically create buttons as improvement
        //assign label and answers to html elements
        let quizQuestion = document.getElementById("question");
        quizQuestion.textContent = this.label;

        let answerOptionOne = document.getElementById("answerChoiceOne");
        answerOptionOne.textContent = this.answers[0];

        let answerOptionTwo = document.getElementById("answerChoiceTwo");
        answerOptionTwo.textContent = this.answers[1];

        let answerOptionThree = document.getElementById("answerChoiceThree");
        answerOptionThree.textContent = this.answers[2];

        let answerOptionFour = document.getElementById("answerChoiceFour");
        answerOptionFour.textContent = this.answers[3];

        //wire up event listener for question click
        let checkAnswer = function(event) {
            let resultElement = document.getElementById("result");
            let selectedAnswer = event.target.getAttribute("answer");

            if (selectedAnswer === this.correctAnswer) {
                resultElement.textContent = "Correct!"
            } else {
                resultElement.textContent = "Incorrect :("
            }
        }.bind(this);

        // .bind method ensures function uses parameter in this object scope
        answerOptionOne.addEventListener("click", checkAnswer);
        answerOptionTwo.addEventListener("click", checkAnswer);
        answerOptionThree.addEventListener("click", checkAnswer);
        answerOptionFour.addEventListener("click", checkAnswer);
    }
}

function Quiz() { 
    // properties:
    this.questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
    this.currentQuestion = 0;

    // methods:
    this.start = function() {
        this.questions[0].displayQuestion();
    }

    // logic runs at creation:
    let quizSection = document.getElementById("quiz");
    
    quizSection.addEventListener("click", function() {
        this.currentQuestion += 1;
        this.questions[this.currentQuestion].displayQuestion();
    }.bind(this));
}

//------------
let questionOne = new Question(
    "Commonly used data types do NOT include:",
    ["string", "boolean", "alert", "number"],
    "3");

let questionTwo = new Question(
    "The condition in an if/else statement is enclosed with ____.",
    ["quotes", "curly brackets", "parenthesis", "square brackets"],
    "3");

let questionThree = new Question(
    "Arrays in JavaScript can be used to store ___.",
    ["numbers and strings", "other arrays", "booleans", "all of the above"],
    "4");

let questionFour = new Question(
    "String values must be enclosed within ____ when being assigned to variables.",
    ["commas", "curly brackets", "quotes", "parenthesis"],
    "3");

let questionFive = new Question(
    "A very useful tool used during development and debugging for printing content to the debugger is:",
    ["Javascript", "terminal/bash", "for loops", "console.log"],
    "4");

let quiz = new Quiz();
quiz.start();
