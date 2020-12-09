var startBTN = document.getElementById("start-button");
var nextButton = document.getElementById(nextButton);
var questionsContainer = document.getElementById("questions-container");
var questionElement = document.getElementById("questions");
var answerButtonsElement = document.getElementById("answer-buttons");
var counter = document.getElementById("counter");
var timer = document.getElementById("timer");
var scoreCnt = document.getElementById("s2      core");

startBTN.addEventListener('click', startQuiz);

function startQuiz () {
    startBTN.classList.add('hide')
    currentQuestionIndex = 0
    questionsContainer.classList.remove('hide')
    setNextQuestion()
    next-Button.classList.remove("hide")
    nextQuestion()
}

function resetState() {
    nextButton.classList.add("hide")
    While (answerButtonsElement.firstChild) 
    {
        answerButtonsElement.removeChild
        (answer.firstChild)
    }
    

}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innertext = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.add("click", selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
}
var questions = [
    {
        question: "Which of the following vegetables is not one of the ingredients of V-8 juice?",
        answers: [
            { text: "beet", correct: false},  
            { text: "carrot", correct: false},
            { text: "spinach", correct: false},
            { text: "cabbage",  correct: true},
    ]
    },
    {
        question: "What is the main ingredient in vichyssoise?",
        answers: [
            { text: "lima beans", correct: false},
            { text: "clams", correct: false}, 
            { text: "tomatoes", correct: false}, 
            { text: "potatoes", correct: true},  
            
        ]
    },
    {
        question: "What country produces the most potatoes?",
        answers: [
            {text: "China", correct: true},  
            {text: "United States", correct: false}, 
            {text: "Ireland", correct: false}, 
            {text: "Russia", correct: false},  
        ]
    },
    {
        question: "Marzipan is made with what kind of nut?",
        answers: [    
            {text: "almond", correct: true},  
            {text: "cashew", correct: false}, 
            {text: "pecan", correct: false}, 
            {text: "walnut", correct: false}  
        ]
    },
    {
        question: "In the drink called a zombie, what is the main alcoholic ingredient?",
        answers: [
            {text: "beer", correct: false},  
            {text: "brandy", correct: false}, 
            {text: "rum", correct: true}, 
            {text: "whiskey", correct: false}  
        ] 
    }
]
function Timer() {
    var timerInterval = setInterval (function() {
        secondsLeft--;
        timerInterval.textConent = "Time: + secondsLeft;"

        if(secondsLeft === 0) {
            clearInterval(timerInterval); 750
        }
    })
}
