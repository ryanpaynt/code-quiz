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
var answer1 = document.querySelector('.but1');
var answer2 = document.querySelector('.but2');
var answer3 = document.querySelector('.but3');
var answer4 = document.querySelector('.but4');
var checkAns = document.querySelector('.ans');

var isCorrect = null;
var score = 0;
var timer;
var timerCount;

var questions = ["Commonly used data types in HTML DO NOT include?",
 "This simple datatype holds multiple values?",
  "Elements in an HTML that display onto the webpage?"];
var firstButton = ["footer", "array", "rags"];
var secondButton = ["backer", "list", "bags"];
var thirdButton = ["header", "Queue", "tags"];
var fourthButton = ["section", "Tree", "flags"];
checkAns.innerHTML = " ";

startGame();

function startGame() {
    isCorrect = null;
    timerCount = 15;
    startTimer();
    
    // for(var i = 0; i<questions.length; i++){
        questionEl.innerHTML = questions[0];
        answer1.innerHTML = firstButton[0];
        answer2.innerHTML = secondButton[0];
        answer3.innerHTML = thirdButton[0];
        answer4.innerHTML = fourthButton[0];
        checkQuestion();
        correct();
    // }
}

function checkQuestion(){
    answer2.addEventListener("click", function(){
        isCorrect = true;
    });
}

function correct(){
    if(isCorrect === true){
        checkAns.innerHTML = "Correct!";
    } else {
        checkAns.innerHTML = "Incorrect!";
    }
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (timerCount > 0) {
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

