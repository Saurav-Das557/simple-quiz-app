const questions= [
    {question: "Which is largest animal in the world?",
    answers:[
        {text:"Shark", correct: false},
        {text:"Blue Whale", correct: true},
        {text:"Elephant", correct: false},
        {text:"Gorilla", correct: false},
        
    ]
    },

    {question: "Which food is from Italy?",
        answers:[
            {text:"Noodles", correct: false},
            {text:"Pasta", correct: true},
            {text:"Fried Rice", correct: false},
            {text:"Burger", correct: false},
            
        ]
        },
        {
            question: "Which country is famous for Sushi?",
            answers: [
                { text: "China", correct: false },
                { text: "Korea", correct: false },
                { text: "Japan", correct: true },
                { text: "Thailand", correct: false },
            ]
        },
        {
            question: "Which food is from Mexico?",
            answers: [
                { text: "Pizza", correct: false },
                { text: "Curry", correct: false },
                { text: "Pasta", correct: false },
                { text: "Tacos", correct: true },
            ]
        },
        {
            question: "Which country is known for Croissants?",
            answers: [
                { text: "Germany", correct: false },
                { text: "Italy", correct: false },
                { text: "France", correct: true },
                { text: "Spain", correct: false },
            ]
        },
        {
            question: "Which food is from India?",
            answers: [
                { text: "Burger", correct: false },
                { text: "Sushi", correct: false },
                { text: "Tacos", correct: false },
                { text: "Biryani", correct: true },
            ]
        },
        {
            question: "Which country is known for Kimchi?",
            answers: [
                { text: "Japan", correct: false },
                { text: "Korea", correct: true },
                { text: "Vietnam", correct: false },
                { text: "Thailand", correct: false },
            ]
        },
        {
            question: "Which food is from the United States?",
            answers: [
                { text: "Hot Dogs", correct: true },
                { text: "Paella", correct: false },
                { text: "Spring Rolls", correct: false },
                { text: "Dumplings", correct: false },
            ]
        }
        
        
];

const questionElement= document.getElementById("question")
const answerButtons= document.getElementById("answer-buttons")
const nextButton= document.getElementById("next-btn")


let currentQuestionIndex= 0;
let score =0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo+". "+ currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)

    });


}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; // Increment score only if the selected button is correct
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    
});
startQuiz();

