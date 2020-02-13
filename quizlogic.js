$(document).ready()

$('.button').on('click', event => {
    quizRender();
    $('.button').replaceWith();
    nextQuestion();
    console.log('click');
});

function quizRender() {
    $('.hero-container-1')
        .append(`<div class="progress-bar-1" id="progressbar"><h3>1 of 5</h3><div class="line"></div><div class="total-progress"></div></div>`);
    $(`body`)
        .find(".openbody")
        .replaceWith(`
        <main>
          <div class="question" id="questionContainer">
            <h4>${quiz[i].question}</h4>
          </div>
          <div class="selection-container-1" id="choicesContainer"><form class="boxed">
            <input class="input" type="radio" id="answer-1" name="quiz" value="${quiz[i].choices[0]}" required />
            <label class="label" for="answer-1">${quiz[i].choices[0]}</label>
            <input class="input" type="radio" id="answer-2" name="quiz" value="${quiz[i].choices[0]}" />
            <label class="label" for="answer-2">${quiz[i].choices[1]}</label>
            <input class="input" type="radio" id="answer-3" name="quiz" value="${quiz[i].choices[0]}">
            <label class="label" for="answer-3">${quiz[i].choices[2]}</label>
            <input class="input" type="radio" id="answer-4" name="quiz" value="${quiz[i].choices[0]}">
            <label class="label" for="answer-4">${quiz[i].choices[3]}</label>
            <input class="input" type="radio" id="answer-5" name="quiz" value="${quiz[i].choices[0]}">
            <label class="label" for="answer-5">${quiz[i].choices[4]}</label>
            <br><br>
            <input type="submit" id="submitquestionBtn" value="Next">
          </form>
        </div>
      </main>`)
    gettingToNextQuestion();
}

let questionCount = 1 // Current question
let playerScore = 0
let i = 0

// this is iterating through the questions 
function gettingToNextQuestion(params) {
    $('.boxed').submit(event => {
        event.preventDefault();
        const answer = $('input:checked').val()
        // 18-25
        let indexChoice = quiz[questionCount - 1].choices.findIndex(choice => choice === answer)
        // ['18-25', '25-30', ...]
        // => 0
        let answerValue = quiz[questionCount - 1].answers[indexChoice]
        // 20
        playerScore += answerValue
    })
}

function wentToNextQuestion() {
    $('')
}

// when we hit next button 
// - new question loads
// -new set of answers load
// -player score gets added to previous




