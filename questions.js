

$(document).ready()

// q's followed by choices followed by an array of values that are aligned with the choices.
// I want to be able to "weight the value of the choices". this should be added to the end score.

var quiz = [
    {
        "question": "How old are you?",
        "choices": ["18-25", "26-34", "35-46", "46-55", "55+"],
        "answer": [20, 18, 16, 10, 5]
    }, {
        "question": "Where do you live?",
        "choices": ["Large City", "Medium City", "Large Town", "Small Town", "Rural Area"],
        "answer": [4, 8, 12, 16, 20]
    }, {
        "question": "How would you rate your physical condition?",
        "choices": ["Ultra runner", "Marathon runner", "I like to run", "Whats running?"],
        "answer": [20, 16, 12, 8, 4]
    }, {
        "question": "Rate your food preperation skills",
        "choices": ["I can cook with a campfire", "I can hunt", "I feel at home in the kitchen", "I mostly microwave meals", "Instant noodles"],
        "answer": [20, 16, 12, 8, 4]
    }, {
        "question": "How well can you navigate?",
        "choices": ["I can get home blindfolded", "Capable with a compass", "With landmarks", "Left or right you pick", "I pick a direction and run"],
        "answer": [20, 16, 12, 8, 4]
    }
];

// Defining elements

var currentQuestion = 0,
    score = 0;

function $(id) { // shortcut for document.getElementById
    return document.getElementById(id);
}

var content = $("content"),
    questionContainer = $("question"),
    choicesContainer = $("choicesContainer"),
    scoreContainer = $("scoreContainer"),
    submitBtn = $("submitBtn");

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