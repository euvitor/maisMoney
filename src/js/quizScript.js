const quizContainer = document.getElementById('quizContainer');
const quizStartButton = document.getElementById('quizStartButton');
const quizPages = document.querySelectorAll('.quiz-pages');
const bottomNavContainer = document.getElementById('bottomNavContainer')

let currentQuestion = 0;
let totalPoints = 0;

quizStartButton.addEventListener('click', () => {
    showQuestion();
})

function showQuestion() {
    if (currentQuestion < (quizPages.length - 4)) {
        quizPages[currentQuestion].style.display = "none";
        currentQuestion++;
        quizPages[currentQuestion].style.display = "flex";
    } else {
        quizPages[currentQuestion].style.display = "none";
        showResult();
    }
}


quizContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('answer')) {
        totalPoints += parseInt(event.target.dataset.points);
        showQuestion();
    }
})

function showResult() {
    if (totalPoints <= 5) {
        quizPages[quizPages.length - 3].style.display = "flex";
    } else if (totalPoints <= 12) {
        quizPages[quizPages.length - 2].style.display = "flex";
    } else {
        quizPages[quizPages.length - 1].style.display = "flex";
    }
    bottomNavContainer.style.display = "flex";
}