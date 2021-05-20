var sec = document.querySelector("section");
var h1El = document.querySelector("h1");
var stage = 0;
var questions = [
    { title: "what is hoisting?"},
    { title: "what is fun?"},
    { title: "what is digging?"},
    { title: "what is css?"},
    { title: "what is js?"},
    { title: "what is html?"}
]

function renderQuestion(){
    var question = questions[stage];
    h1El.textContent = question.title;
}

sec.addEventListener("click", function(event){
    var element = event.target;
    if(element.matches("button")){
        if(stage < question.length - 1){
        stage++;
        renderQuestion();
        } else {
            alert("END OF QUIZ");
        }
    }
});