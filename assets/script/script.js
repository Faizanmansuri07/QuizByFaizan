const question = document.querySelector("#question");
const optionParent = document.querySelector(".options");
const nextBtn = document.querySelector("#next");
let currentQueNo = document.querySelector("#counter")
const quizContainer = document.querySelector(".quiz-container")
const resetContainer = document.querySelector(".reset")
const userScore = document.querySelector("#score")
const container = document.querySelector(".container")



const questionArray = [];
let totalNoQuestions = 1
let correctAnswers = 0
function generateQuestionNumber() {
    quizContainer.style.display = "block";
    resetContainer.style.display = "none"
    if(totalNoQuestions > 10) {
        gameOver()
    }   else {

    
    if (questionArray.length === questions.length) {
        over()
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (questionArray.includes(randomIndex));


    questionArray.push(randomIndex);
    // console.log(questionArray);
    
    renderQuiz(randomIndex);
    }
}

function renderQuiz(index) {
    nextBtn.innerHTML = "New Question"
    const quizObj = questions[index];
    currentQueNo.innerHTML = `${totalNoQuestions} / 10`
    question.innerHTML = `${totalNoQuestions}. ${quizObj.question}`;

    optionParent.innerHTML = ""; // Clear previous options
    quizObj.answers.forEach((option, idx) => {
        const optionBtn = document.createElement("button");
        optionBtn.classList.add("btn");
        optionBtn.innerHTML = option.text;
        optionBtn.onclick = () => checkAnswer(optionBtn, option.correct);
        // console.log(option);
        
        
        optionParent.appendChild(optionBtn);
    });
    nextBtn.disabled = true
}

function checkAnswer(selectedButton, isCorrect) {    
    totalNoQuestions++
    // console.log(selectedButton,isCorrect);
    
    nextBtn.disabled = false
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => button.disabled = true); // Disable all buttons

    if (isCorrect) {
        selectedButton.classList.add("correct");
        correctAnswers++;
    } else {
        selectedButton.classList.add("incorrect");
        
        buttons.forEach((button, index) => {
            // console.log(questions[questionArray[questionArray.length - 1]].answers[index].correct);
            
            
            // Check the correct answer based on the current question index
            if (questions[questionArray[questionArray.length - 1]].answers[index].correct) {
                button.classList.add("correct"); // Highlight the correct answer
            }
        });
    }
}


function gameOver() {
    quizContainer.style.display = "none";
    resetContainer.style.display = "block"
    totalNoQuestions = 1
    userScore.innerHTML = `You score ${correctAnswers} out of 10`;
    nextBtn.innerHTML = "New Game"
}

function over() {
    quizContainer.style.display = "none"
    resetContainer.style.display = "none"
    const p = document.createElement("p");
    p.innerHTML = "Today's questions are over....!"
    container.appendChild(p)
    nextBtn.style.display = "none"
}



document.querySelector("#next").addEventListener("click", generateQuestionNumber);
