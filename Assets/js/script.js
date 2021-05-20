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
var sec = document.querySelector('section');
// var answer1 = document.querySelector('.but1');
// var answer2 = document.querySelector('.but2');
// var answer3 = document.querySelector('.but3');
// var answer4 = document.querySelector('.but4');
var checkAns = document.querySelector('.ans');

var score = 0;
var timeLeft;
var stage = 0;

// var questions = ["Commonly used data types in HTML DO NOT include?",
//  "This simple datatype holds multiple values?",
//   "Elements in an HTML that display onto the webpage?"];
// var firstButton = ["footer", "array", "rags"];
// var secondButton = ["backer", "list", "bags"];
// var thirdButton = ["header", "Queue", "tags"];
// var fourthButton = ["section", "Tree", "flags"];

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

    {title: "",
    answers: [],
    correct: null}
]

renderQuestion();
//countdown();

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
            }
        stage ++;
        renderQuestion();
    } else {

            alert("END OF QUIZ");
        }
    }
});

// function countdown() {
  
//     timeLeft = 15;
//     // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
      
//       // YOUR CODE HERE
//       timeLeft--;
//       if(timeLeft === 0){
//         alert("OUT OF TIME!");
//         clearInterval(timeInterval);
//       }
//       console.log(timeLeft);
//     }, 1000);
//   }


//function subfromtime(){
//     count -= 10;

// }
