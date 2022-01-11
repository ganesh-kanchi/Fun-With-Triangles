const quizForm = document.querySelector('#Quiz-form');
const quizBtn = document.querySelector('#Quiz-btn');
const quizOutput = document.querySelector('#Quiz-output');

const quizAnswers = ["90°", "Right Angled", "a + b + c", "85°"];

quizBtn.addEventListener("click", () => {
    const quizResult = new FormData(quizForm);
    let index = 0, score = 0;
    for (let entry of quizResult.values()) {
        score =  (entry === quizAnswers[index]) ? score++ : score ;
        index = index + 1;
    }
    quizOutput.innerText = `Your score is ${score}.`;
});