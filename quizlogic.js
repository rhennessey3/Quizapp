$(document).ready()

// q's followed by choices followed by an array of values that are aligned with the choices.
// I want to be able to "weight the value of the choices". this should be added to the end score.


$('.submit').click(event => {
    quizRender();
    $('.submit').replaceWith();
    nextQuestion();
});

function quizRender() {
    $('main').find('#opencontainer')
        .replaceWith(`<h4>${quiz[i]
            .question}</h3><form class="quizForm">
            <input type="radio" 
            name="answer"
            value="${quiz[i].answers[0]}" 
            required>${quiz[i].answers[0]}<br><input type="radio" name="answer" 
            value="${quiz[i].answers[1]}">${quiz[i].answers[1]}<br><input type="radio" name="answer" 
            value="${quiz[i].answers[2]}">${quiz[i].answers[2]}<br><input type="radio" name="answer" 
            value="${quiz[i].answers[3]}">${quiz[i].answers[3]}<br><button class='submit'>Submit</button></form>`);
    quizSubmit();
    questionCounter();
    scoreCounter();
}

// Defining elements

var currentQuestion = 0,
    score = 0;

function $(id) { // shortcut for document.getElementById
    return document.getElementById(id);
}

var content = $("content"),
    questionContainer = $("questionContainer"),
    choicesContainer = $("choicesContainer"),
    scoreContainer = $("scoreContainer"),
    submitBtn = $("submit");

function askQuestion() {
    var choices = quiz[currentQuestion].choices,
        choicesHtml = "";

    // loop through choices, and create radio buttons
    for (var i = 0; i < choices.length; i++) {
        choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
            "' id='choice" + (i + 1) +
            "' value='" + choices[i] + "'>" +
            " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
    }

    // load the question
    questionContainer.textContent = "Q" + (currentQuestion + 1) + ". " +
        quiz[currentQuestion].question;

    // load the choices
    choicesContainer.innerHTML = choicesHtml;
}

function checkAnswer() {
    // determine which radio button they clicked
    var radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) { // if this radio button is checked
            score = score + quiz[currentQuestion].answer[i];
        }
    }

    // if we're not on last question, increase question number
    if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
        askQuestion();
    } else {
        showFinalResults();
    }

}   