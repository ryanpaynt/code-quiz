// multiple selectors
var highscore = document.querySelector('.scores');
var formEl = document.querySelector('.container');
var score = localStorage.getItem('Score');
var input = document.querySelector("input[type=text]");
highscore.textContent = "Your Score is: " + score;
var scoreBoard = document.querySelector('.highScore');

//storing in local storage
var board = JSON.parse(localStorage.getItem('scoreBoard')) || [];
renderHighScoreBoard();

//once the button is pushed then initials and score are stored
formEl.addEventListener('submit', function(event){
    event.preventDefault();
    var initials = input.value;
    var data = {Initials: initials, score: score};
    console.log('SUBMIT', data)
    board = board.concat(data);
    localStorage.setItem('scoreBoard', JSON.stringify(board));
});

//renders highscore bored once refreshed
function renderHighScoreBoard(){
    var sortedScore = board.sort(function(a,b){
        return b.score-a.score;
    });
    for(var score of board){
        var li = document.createElement('li');
        li.innerHTML = "Initials: " + score.Initials + " has " + score.score;
        document.querySelector('ol').appendChild(li);

    }
}
























// submitButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     input = document.querySelector("#init").value;
//     arrScores.push("Initials: " + input + "   Score: " + score);
//     JSON.stringify(localStorage.setItem('Scores', arrScores{Initiails: input, Score: score}));
//     renderLeaderBoard();
//     addListItem();
// });

// function addListItem(){
//     var node = document.createElement('li');
//     listItem = document.createTextNode(localStorage.getItem(arrScores[counter]));
//     node.appendChild(listItem);
//     arrScores.concat(listItem);
//     document.querySelector('ul').appendChild(node);
//     counter++;
// }

// function renderLeaderBoard(){
//     for(var i = 0; i < arrScores.length; i++){
//         var node = document.createElement('li');
//         listItem = document.createTextNode(localStorage.getItem(arrScores[i]));
//         node.appendChild(listItem);
//         document.querySelector('ul').appendChild(node);
//     }
// }

/* 
1) setup query for input


formEl.addEventListener('submit', function(event)){

}
*/

