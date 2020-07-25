var timerEl = document.getElementById("timer");
var question = document.getElementById("questions");
var answer = document.getElementById("answer");
var scores = document.getElementById("scores");
var users = document.getElementById("initials");
var time = 10 * questions.length;
var optionButtons = [document.querySelector("#answerA"), document.querySelector("#answerB"),
document.querySelector("#answerC"), document.querySelector("#answerD")];

let questions = [
    {
        question : "What are variables used for in JavaScript Programs?",
        A:  "Storing numbers, dates, or other values",
        B:  "Varying randomly",
        C:  "Causing high-school algebra flashbacks",
        D:  "None of the above",
        Answer: A
    },{
        question: "Commonly used data types DO NOT include:",
        A:"strings",
        B:"booleans",
        C:"alerts",
        D:"numbers",
        answer: "alerts"
    },{
       question: "Data is stored in localStorage as _____.",
        A:"strings",
        B:"objects",
        C:"arrays",
        D:"all of the above",
        answer: "strings"
    },{
       question: "Arrays in JavaScript can be used to store ______.",
        choices: ["strings", "numbers", "objects", "All of the Above"],
        answer: "All of the Above"
    },{
        question : "Inside which HTML element do we put the JavaScript?",
        A: "<js>",
        B: "<script>",
        C: "<javascript>",
        D: "<scripting>",
        answer: "<script>"
    },{
        question : "Where is the correct place to insert a JavaScript?",
        A: "The <head> section",
        B: "The <body> section",
        C: "Both A and B",
        D: "none of the above",
        answer:"Both A and B"
    },{
        question : "How do you write 'Hello World' in an alert box?",
        A: "msg('Hello World');",
        B: "msgBox('Hello World')",
        C: "alertBox('Hello World')",
        D: "text('Hello World')",
        answer: "alert('Hello World')"
    },
];

function countdown() {
    var timeLeft = 120;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        speedRead();
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }