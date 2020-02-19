$(document).ready()

$('.button').on('click', event => {
    quizRender();
    $('.button').replaceWith();
    console.log('click');
});

function quizRender() {
    let i = questionCount - 1;
    $('#statusbar')
        .html(`<div class="progress-bar-1" id="progressbar">` +
            `<h3 class="hideOnDone">${questionCount} of 5</h3>` +
            `<div class="line"></div><div class="hideOnDone total-progress total-progress-${questionCount}"></div>` +
            `</div>`);
    $(".openbody").hide();
    $("#questionwrapper")
        .html(`
        <main>
          <div class="question" id="questionContainer">
            <h4>${quiz[i].question}</h4>
          </div>
          <div class="selection-container-1" id="choicesContainer"><form class="boxed">
            <input class="input" type="radio" id="answer-1" name="quiz" value="${quiz[i].choices[0]}" required />
            <label class="label" for="answer-1">${quiz[i].choices[0]}</label>
            <input class="input" type="radio" id="answer-2" name="quiz" value="${quiz[i].choices[1]}" />
            <label class="label" for="answer-2">${quiz[i].choices[1]}</label>
            <input class="input" type="radio" id="answer-3" name="quiz" value="${quiz[i].choices[2]}">
            <label class="label" for="answer-3">${quiz[i].choices[2]}</label>
            <input class="input" type="radio" id="answer-4" name="quiz" value="${quiz[i].choices[3]}">
            <label class="label" for="answer-4">${quiz[i].choices[3]}</label>
            <input class="input" type="radio" id="answer-5" name="quiz" value="${quiz[i].choices[4]}">
            <label class="label" for="answer-5">${quiz[i].choices[4]}</label>
            <br><br>
            <input type="submit" id="submitquestionBtn" value="Next">
          </form>
        </div>
      </main>`);
    gettingToNextQuestion();
}

let questionCount = 1 // Current question
let playerScore = 0

// this is iterating through the questions 
function gettingToNextQuestion(params) {
    $('.boxed').submit(event => {
        event.preventDefault();
        const answer = $('input:checked').val();
        let indexChoice = quiz[questionCount - 1].choices.findIndex(choice => choice === answer);
        let answerValue = quiz[questionCount - 1].answer[indexChoice];

        playerScore += answerValue;
        if (questionCount > 4) {
            endTheGame();
        } else {
            questionCount++;
            quizRender();
        }
    })
}

function endTheGame() {
    $(".heading-container-1").append(`<h6>${playerScore}%</h6>`);
    $("#questionwrapper").hide();
    $(".openbody").hide();
    $('.hideOnDone').hide();
    $('#finishscreen').show();
    $("#finishscreen").append(`<h5>By strict scientific evidence we find that you are ${playerScore}% likely to survive.</h4>`)
    $("#finishscreen").append(`<button id="finishBtn">Try your fate again</button>`)

}

function testYourFateAgain() {
    $('#finishBtn').on('click', '.retry', event => {
        quizRender();
        $('.button').replaceWith();
        console.log('click');
    })
}



