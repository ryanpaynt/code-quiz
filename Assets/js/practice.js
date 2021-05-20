var sec = document.querySelector("section");
var h1El = document.querySelector("h1");
/* <header>
        <h1></h1>
        <hr>
    </header>
    
    <section>
        <ul>
            <li><button class="but1"></button></li>
            <li><button class="but2"></button></li>
            <li><button class="but3"></button></li>
            <li><button class="but4"></button></li>
        </ul> */

var question = {
    title: "",
    answers: [
        'ans1',
        'ans2',
        'ans3',
        'ans4'
    ],
    correct: 1
}

//1) get rid of all (already did it)
//

function renderQuestion() {
    h1El.textContent = question.title;

    for(var i = 0; i < question.answers.length; i++){
        var answer = question.answers[i];
        var btnEl = document.createElement("button");
        btnEl.textContent = answer;
        btnEl.setAttribute("class", "btn");
        btnEl.setAttribute("data-index", i);
        sec.appendChild
    }
}

sec.addEventListener("click", function(event){
    var element = event.target;
    if(element.matches("button")){
        var index = parseInt(element.dataset.index);
        console.log(element.dataset.index, question.correct);
        console.log(element.dataset.index === question.correct);
        if(element.dataset.index === question.correct){
        element.stle.backgroundcolor = "green";
    }
    }
});