// multiple selectors
var questionEl = document.querySelector('h1');
var sec = document.querySelector('section');
var timerText = document.querySelector('.timer');
var checkAns = document.querySelector('.ans');

//global vars
var score = 0;
var timeLeft;
var stage = 0;

//object containing question title, choices, and index of correct answer
var questions = [
    { title: "Commonly used data types in HTML DO NOT include?",
    answers: [
        'footer',
        'backer',
        'header',
        'section'
    ],
    correct: 1},

    { title: "This simple datatype holds multiple values?",
    answers: [
        'array',
        'cup',
        'bucket',
        'bag'
    ],
    correct: 0},

    { title: "Elements in an HTML that display onto the webpage?",
    answers: [
        'rags',
        'bags',
        'tags',
        'flags'
    ],
    correct: 2},

    { title: "What does CSS stand for?",
    answers: [
        'Cascading Style Sheets',
        'Cars Standing Still',
        'Crazy Styles Sheets',
        'Coding Style Strings'
    ],
    correct: 0},

    { title: "______ is JavaScript's default behavior of moving all declarations to the top of the current scope.",
    answers: [
        'Running',
        'Flying',
        'Pulling',
        'Hoisting'
    ],
    correct: 3},

    { title: "What character can we use to before styling a class in CSS?",
    answers: [
        '@',
        '!',
        ',',
        '.'
    ],
    correct: 3},

    { title: "A ______ loop is particularily used to lopp objects.",
    answers: [
        'for-in',
        'for-each',
        'for-on',
        'for-every'
    ],
    correct: 0}
]

//method declaring
countdown();
renderQuestion();

//render question uses a forloop to run through the question objects
//and puts uses them to chnage the innerHTML of the lists
function renderQuestion() {
    var question = questions[stage].title;
    questionEl.textContent = question;

    for(var i = 0; i < questions[stage].answers.length; i++){
        var answer = questions[stage].answers[i];

        if(stage === 0){
        var btnEl = document.createElement("button");
        btnEl.textContent = answer;
        btnEl.setAttribute("class", "btnEl");
        btnEl.setAttribute("data-index", i);
        sec.appendChild(btnEl);
        } else {
            var btnEl = document.querySelector("button");  
            btnEl.textContent = answer;
            btnEl.setAttribute("class", "btnEl");
            btnEl.setAttribute("data-index", i);
            sec.appendChild(btnEl);  
        }
        
    }
}

// when a button is pushed this listener will check if the button index
//is the same as the one in the object. If they are it is correct. Otherwise seconds get taken off
sec.addEventListener("click", function(event){
    var element = event.target;
    console.log(element);
    if(element.matches("button")){
        var index = parseInt(element.dataset.index);
        if(stage < questions.length -1){
            if(index === questions[stage].correct){
                checkAns.textContent = "Correct!"
                score ++;
            }else{
                checkAns.textContent = "Incorrect!"
                subFromTime();
            }
        stage ++;
        renderQuestion();
    } else {
        }
    }
});

//countdown function produces a simple countdown. once the timer is down
//if the questions run out or if the timer is doen a new window appears
function countdown() {
  
    timeLeft = 30;
    timerText.textContent = "Time: " + timeLeft + 's';
    var timeInterval = setInterval(function () {
      timeLeft--;
      if(timeLeft <= 0){
          timeLeft = 0;
        timerText.textContent = "Time: " + timeLeft + 's';
        alert("OUT OF TIME!");
        localStorage.setItem('Score', score);
        clearInterval(timeInterval);
        window.location = 'file:///Users/ryanpaynter/Homework-UNCCBC/code-quiz/code-quiz/highscore.html';
      } else if(stage === 6){
        timeLeft = 0;
        timerText.textContent = "Time: " + timeLeft + 's';
        alert("END OF QUIZ!");
        localStorage.setItem('Score', score);
        window.location = 'file:///Users/ryanpaynter/Homework-UNCCBC/code-quiz/code-quiz/highscore.html';
      }
    timerText.textContent = "Time: " + timeLeft + 's';
    }, 1000);
  }

//function that takes off time
function subFromTime(){
    timeLeft -= 10;

}