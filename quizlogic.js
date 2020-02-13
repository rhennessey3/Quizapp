$(document).ready()

// q's followed by choices followed by an array of values that are aligned with the choices.
// I want to be able to "weight the value of the choices". this should be added to the end score.


$('.button').on('click', event => {
    quizRender();
    $('.button').replaceWith();
    nextQuestion();
    console.log('click');
});


function quizRender() {
    $('.hero-container-1').append(`<div class="progress-bar-1" id="progressbar"><h3>1 of 5</h3><div class="line"></div><div class="total-progress"></div></div>`);
    $(`body`).find(".openbody").replaceWith(`<main><div class="question" id="questionContainer"><h4>${quiz[i].question}</h4></div><div class="selection-container-1" id="choicesContainer"><form class="boxed"><input class="input" type="radio" id="answer-1" name="quiz" value="x" required /><label class="label" for="answer-1">18-21</label><input class="input" type="radio" id="answer-2" name="quiz" value="x" /><label class="label" for="answer-2">22-30</label><input class="input" type="radio" id="answer-3" name="quiz" value="x"><label class="label" for="answer-3">31-40</label><input class="input" type="radio" id="answer-4" name="quiz" value="x"><label class="label" for="answer-4">40-50</label><input class="input" type="radio" id="answer-5" name="quiz" value="x"><label class="label" for="answer-5">40-50</label><br><br><input type="submit" id="submitquestionBtn" value="Next"></form></div></main>`)
}

let questionCount = 1
let playerScore = 0
let i = 0
// this is iterating through the questions 
function gettingToNextQuestion(params) {
    $('.boxed').submit(event => {
        event.preventDefault();
        indexOf()
    })
}


// $('main').find('#container').replaceWith(`<h3>${quiz[i].question}</h3><form class="quizForm"><input type="radio" name="answer" value="${quiz[i].answers[0]}" required>${quiz[i].answers[0]}<br><input type="radio" name="answer" value="${quiz[i].answers[1]}">${quiz[i].answers[1]}<br><input type="radio" name="answer" value="${quiz[i].answers[2]}">${quiz[i].answers[2]}<br><input type="radio" name="answer" value="${quiz[i].answers[3]}">${quiz[i].answers[3]}<br><button class='submit'>Submit</button></form>`);
// quizSubmit();
// questionCounter();
// scoreCounter();
// }