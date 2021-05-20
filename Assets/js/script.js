var questionEl = document.querySelector('h1');
var sec = document.querySelector('section');
var timerText = document.querySelector('.timer');
// var answer1 = document.querySelector('.but1');
// var answer2 = document.querySelector('.but2');
// var answer3 = document.querySelector('.but3');
// var answer4 = document.querySelector('.but4');
var checkAns = document.querySelector('.ans');

var score = 0;
var timeLeft;
var stage = 0;

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

countdown();
renderQuestion();

function renderQuestion() {
    var question = questions[stage].title;
    questionEl.textContent = question;

    for(var i = 0; i < questions[stage].answers.length; i++){
        var answer = questions[stage].answers[i];
        console.log(answer);
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

sec.addEventListener("click", function(event){
    var element = event.target;
    console.log(element);
    if(element.matches("button")){
        var index = parseInt(element.dataset.index);
        if(stage < questions.length -1){
            if(index === questions[stage].correct){
                checkAns.textContent = "Correct!"
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

function countdown() {
  
    timeLeft = 30;
    timerText.textContent = "Time: " + timeLeft + 's';
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // YOUR CODE HERE
      timeLeft--;
      if(timeLeft <= 0){
          timeLeft = 0;
        timerText.textContent = "Time: " + timeLeft + 's';
        alert("OUT OF TIME!");
        clearInterval(timeInterval);
      }
    timerText.textContent = "Time: " + timeLeft + 's';
    }, 1000);
  }


function subFromTime(){
    timeLeft -= 10;

}
