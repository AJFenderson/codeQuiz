const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timer = document.getElementById("timer");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What are variables used for in JavaScript Programs?",
        
        A:  "Storing numbers, dates, or other values",
        B:  "Varying randomly",
        C:  "Causing high-school algebra flashbacks",
        D:  "None of the above",
        
        Answer: "A"
    },{
        question: "Commonly used data types DO NOT include:",
        
        A:"strings",
        B:"booleans",
        C:"alerts",
        D:"numbers",
    
        answer: "C"
    },{
       question: "Data is stored in localStorage as _____.",
       
        A:"strings",
        B:"objects",
        C:"arrays",
        D:"all of the above",
       
        answer: "A"
    },{
       question: "Arrays in JavaScript can be used to store ______.",
       
           A:"strings",
           B:"numbers",
           C:"objects",
           D:"All of the Above",
       
        answer: "D"
    },{
        question : "Inside which HTML element do we put the JavaScript?",
        
        A: "<js>",
        B: "<script>",
        C: "<javascript>",
        D: "<scripting>",
        
        answer: "B"
    },{
        question : "Where is the correct place to insert a JavaScript?",
        
        A: "The <head> section",
        B: "The <body> section",
        C: "Both A and B",
        D: "none of the above",
        
        answer:"C"
    },{
        question : "How do you write 'Hello World' in an alert box?",
        
        A: "msg('Hello World');",
        B: "msgBox('Hello World')",
        C: "alertBox('Hello World')",
        D: "text('Hello World')",
        
        answer: "C"
    },
];


// variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let questionNum = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// question selection
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    rendertimer();
    TIMER = setInterval(rendertimer,1000); // 1000ms = 1s
}

// progress here
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// timer here

function rendertimer(){
    if(questionNum <= questionTime){
        timer.innerHTML = questionNum;
        timeGauge.style.width = questionNum * gaugeUnit + "px";
        questionNum++
    }else{
        questionNum = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answers){
    if( answer == questions[runningQuestion].correct){
        
        score++;
        
        answerIsCorrect();
    }else{
        
        answerIsWrong();
    }
    questionNum = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}


function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate score
    const scorePerCent = Math.round(100 * score/questions.length);

    
    
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}















// var timer;
// var question = document.querySelector("#questionArea");
// var answer = document.querySelector("#answer");
// var scores = document.querySelector("#scores");
// var users = document.querySelector("#initials");
// var time = 10 * questions.length;
// var optionButtons = [document.querySelector("#answerA"), document.querySelector("#answerB"),
// document.querySelector("#answerC"), document.querySelector("#answerD")];
// var questionNum = 0;
// var answerText = "";

// let questions = [
//     {
//         question : "What are variables used for in JavaScript Programs?",
//         answers: {
//         A:  "Storing numbers, dates, or other values",
//         B:  "Varying randomly",
//         C:  "Causing high-school algebra flashbacks",
//         D:  "None of the above",
//         },
//         Answer: A
//     },{
//         question: "Commonly used data types DO NOT include:",
//         answers: {
//         A:"strings",
//         B:"booleans",
//         C:"alerts",
//         D:"numbers",
//     },
//         answer: "alerts"
//     },{
//        question: "Data is stored in localStorage as _____.",
//        answers: {
//         A:"strings",
//         B:"objects",
//         C:"arrays",
//         D:"all of the above",
//        },
//         answer: "strings"
//     },{
//        question: "Arrays in JavaScript can be used to store ______.",
//        answers: {
//            A:"strings",
//            B:"numbers",
//            C:"objects",
//            D:"All of the Above"
//        },
//         answer: "All of the Above"
//     },{
//         question : "Inside which HTML element do we put the JavaScript?",
//         answers: {
//         A: "<js>",
//         B: "<script>",
//         C: "<javascript>",
//         D: "<scripting>",
//         },
//         answer: "<script>"
//     },{
//         question : "Where is the correct place to insert a JavaScript?",
//         answers: {
//         A: "The <head> section",
//         B: "The <body> section",
//         C: "Both A and B",
//         D: "none of the above",
//         },
//         answer:"Both A and B"
//     },{
//         question : "How do you write 'Hello World' in an alert box?",
//         answers: {
//         A: "msg('Hello World');",
//         B: "msgBox('Hello World')",
//         C: "alertBox('Hello World')",
//         D: "text('Hello World')",
//         },
//         answer: "alert('Hello World')"
//     },
// ];


// // function showQuestions(questions, quizContainer){
// // 	// we'll need a place to store the output and the answer choices
// // 	var output = [];
// // 	var answers;

// // 	// for each question...
// // 	for(var i=0; i<questions.length; i++){
		
// // 		// first reset the list of answers
// // 		answers = [];

// // 		// for each available answer to this question...
// // 		for(letter in questions[i].answers){

// // 			// ...add an html radio button
// // 			answers.push(
// // 				'<label>'
// // 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// // 					+ letter + ': '
// // 					+ questions[i].answers[letter]
// // 				+ '</label>'
// // 			);
// //         }
        
// //         output.push(
// // 			'<div class="question">' + questions[i].question + '</div>'
// // 			+ '<div class="answers">' + answers.join('') + '</div>'
// // 		);
// // 	}

// // 	// finally combine our output list into one string of html and put it on the page
// // 	quizContainer.innerHTML = output.join('');
// // }

// // showQuestions(questions, quizContainer);
// function start() {
// changeQuestion();

// setTimeout(function () {
//     document.querySelector("questionArea").className = "slideUp";
//     }, 400);

//     timer = setInterval(function () {
//         time--;
//         document.querySelector(".navbar-text").textContent = "Time: " + time;
//         if (time <= 0) {
//             clearInterval(timer);
//             showEndGame();
//         }
//     }, 1000);
// }

//     function changeQuestion() {
//         var questionInfo = questions[questionNum];
    
//         // ...If there are no questions left, stop the timer and end the function...
//         if (questionInfo == undefined) {
//             clearInterval(timer);
//             showEndGame();
//             return;
//         }
    
//         // ...Otherwise write the information into the next question...
//         setTimeout(function () {
//             for (var i = 0; i < optionButtons.length; i++) {
//                 optionButtons[i].textContent = i + 1 + '. ' + questionInfo.choices[i];
//                 optionButtons[i].value = questionInfo.choices[i];
//             }
//             document.querySelector("#questionPrompt").textContent = questionInfo.question;
//             // ...And show the question
//             questions.className = "questionFadeIn";
//         }, 400);

//         function showEndGame() {
//             if (time != 0) {
//                 document.querySelector("#showScore").textContent = time;
//             } else {
//                 document.querySelector("#showScore").textContent = "DNF";
//             }

// function countdown() {
//     var timeLeft = 120;
  
//     var timeInterval = setInterval(function() {
//       timerEl.textContent = timeLeft + " seconds remaining";
//       timeLeft--;
  
//       if (timeLeft === 0) {
//         timerEl.textContent = "";
//         speedRead();
//         clearInterval(timeInterval);
//       }
  
//     }, 1000);
//   }

//   document.querySelector("#quizStart").onclick = startQuiz;
// document.addEventListener("click", checkAnswer);