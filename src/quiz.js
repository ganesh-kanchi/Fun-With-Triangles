const quizForm = document.querySelector('#Quiz-form');
const quizBtn = document.querySelector('#Quiz-btn');
const quizOutput = document.querySelector('#Quiz-output');

const quizAnswers = ["90°", "Right Angled", "a + b + c", "85°"];

function scoreCalculator() {
    const quizResult = new FormData(quizForm);
    let index = 0, score = 0;
    for (let entry of quizResult.values()) {
        if (entry === quizAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    quizOutput.innerText = "Your score is " + score + ".";
}

quizBtn.addEventListener("click", scoreCalculator);



