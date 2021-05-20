/* 
vars

declare highscore
isDone
timer
timerCount

var questions = []

function getHighscore

function winGame

function startTimer

function setWins

checkScore

event.target

.matches
*/

var questionEl = document.querySelector('h1');
var answer1 = document.querySelector('.butt1');
var answer2 = document.querySelector('.butt2');
var answer3 = document.querySelector('.butt3');
var answer4 = document.querySelector('.butt4');
var checkAns = document.querySelector('.ans');

var isCorrect = false;
var score = 0;
var timer;
var timerCount;

var questions = ["Commonly used data types in HTML DO NOT include?",
 "This simple datatype holds multiple values?",
  "Elements in an HTML that display onto the webpage?"];
var firstButton = ["<footer>", "array", "rags"];
var secondButton = ["<backer>", "list", "bags"];
var thirdButton = ["<header>", "Queue", "tags"];
var fourthButton = ["<section>", "Tree", "flags"];

questionEl.innerHTML = questions[0];

function startGame() {
    isCorrect = false;
    timerCount = 15;
    startTimer();
    
    for(var i = 0; i<questions.length; i++){
        questionEl.innerHTML = questions[i];
        answer1.innerHTML = firstButton[i];
        answer2.innerHTML = secondButton[i];
        answer3.innerHTML = thirdButton[i];
        answer4.innerHTML = fourthButton[i];
        checkQuestion();
    }
}

function checkQuestion(){

}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        finishGame()
      }
      console.log(timerCount);
    }, 1500);
  }

