const questions =[
    {
        question:"ما هو اول انجيل كتب",
        answers:[
            { text:"متي", correct: false},
            { text:"مرقس", correct: true},
            { text:"لوقا", correct: false},
            { text:"يوحنا", correct: false},

        ]
    },
    {
        question:" ولد القديس مرقس في  ",
        answers:[
            { text:"مصر", correct: false},
            { text:"اوروبا", correct:false },
            { text:"القيروان", correct: true},
            { text:"اورشليم", correct: false},

        ]
    },{
    question:"  معني اسم مرقس هو",
        answers:[
            { text:"مطرقة", correct: true},
            { text:"صخرة", correct: false},
            { text:"بيت", correct: false},
            { text:"سيف", correct: false},

        ]
    }
    ,{
        question:"     كتب انجيل مرقس بين  عام.. وعام ...",
            answers:[
                { text:"65-70", correct: true},
                { text:"70-75", correct: false},
                { text:"75-80", correct: false},
                { text:"80-85", correct: false},
    
            ]
        }
        ,{
            question:"     كتب انجيل مرقس الي ",
                answers:[
                    { text:"اليهود", correct: false},
                    { text:"اليونان", correct: false},
                    { text:"الرومان", correct: true},
                    { text:"العالم كله", correct: false},
        
                ]
            }
            ,{
                question:"     بدأ مرقس خدمته مع",
                    answers:[
                        { text:"بولس وبرنابا", correct: true},
                        { text:"يوحنا وبولس", correct: false},
                        { text:"متي ويعقوب", correct: false},
                        { text:"بولس ويوحنا", correct: false},
            
                    ]
                }
                ,{
                    question:"     من الذي اسس الكنيسة المسيحية في مصر",
                        answers:[
                            { text:"مرقس", correct: true},
                            { text:"بولس", correct: false},
                            { text:"بطرس", correct: false},
                            { text:"يعقوب", correct: false},
                
                        ]
                    }
                    ,{
                        question:"     اسم والدة مرقس هي",
                            answers:[
                                { text:"مريم", correct: true},
                                { text:"سالومة ", correct: false},
                                { text:"اليصابات", correct: false},
                                { text:"سارة", correct: false},
                    
                            ]
                        }
                        ,{
                            question:"     بيت مارمرقس كان اسمه  ",
                                answers:[
                                    { text:"العليقة", correct: false},
                                    { text:"العلية ", correct: true},

                        
                                ]
                            }
                            ,{
                                question:"        تأسس سر ... في بيت مارمرقس",
                                    answers:[
                                        { text:"التناول", correct: true},
                                        { text:"الاعتراف ", correct: false},
                                        { text:"مسحة المرضي", correct: false},
                                        { text:"الميرون", correct: false},
                            
                                    ]
                                }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let index = 0;
let score = 0;

function startQuiz(){
    index = 0;
    score = 0;
    nextButton.innerHTML="next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[index];
    let questionNo = index +1 ;
    questionElement.innerHTML=questionNo + " ." +currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.display = true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your final score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display ="block";
}


function handleNextButton(){
    index++;
    if(index< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click",()=>{
    if(index < questions.length){
        handleNextButton();
    }else{
        alert("Quiz Finished");
        startQuiz();
    }
})

startQuiz();
showQuestion();
selectAnswer();






