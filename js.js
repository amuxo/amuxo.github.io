class Question {
    static answer = null;
    static components = [];
    constructor() {

    }

    static newQuestion() {
        console.log("here");
        Question.components = [(Math.round(100*Math.random())) , (Math.round(100*Math.random()))]
        Question.answer = 1;
        for (let i in Question.components) {
            Question.answer = Question.answer * Question.components[i]; 
        }
        console.log("answer is" + Question.answer);
    }
}

//inital conditions
questionDisplay = document.querySelector("#focus");

function keyboardinput(event) {
    if (Question.answer == null) {
        Question.newQuestion();
        console.log(Question.components[0] + " * " + Question.components[1]);
        questionDisplay.innerText = (Question.components[0] + " * " + Question.components[1]);
    }
}
const bob = new XMLHttpRequest();

document.addEventListener("keydown", keyboardinput);