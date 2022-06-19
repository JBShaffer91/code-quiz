// Business Logic
function check() {

  let question1 = document.quiz.question1.value;
  let question2 = document.quiz.question2.value;
  let question3 = document.quiz.question3.value;
  let question4 = document.quiz.question4.value;
  let question5 = document.quiz.question5.value;
  let correct = 0
  

  // Question1
  if (question1 === "l1") {
    correct = 1;
  }
  if (question1 === "l2") {
    correct = 2;
  }
  if (question1 === "l3") {
    correct = 3;
  }

// Question2
if (question2 === "l1") {
  correct = 1;
}
if (question2 === "l2") {
  correct = 2;
}
if (question2 === "l3") {
  correct = 3;
}

// Question3
if (question3 === "l1") {
  correct = 1;
}
if (question3 === "l2") {
  correct = 2;
}
if (question3 === "l3") {
  correct = 3;
}

// Question4
if (question4 === "l1") {
  correct = 1;
}
if (question4 === "l2") {
  correct = 2;
}
if (question4 === "l3") {
  correct = 3;
}

//Question5
if (question5 === "l1") {
  correct = 1;
}
if (question5 === "l2") {
  correct = 2;
}
if (question5 === "l3") {
  correct = 3;
}

// Scoring
let message = ["JavaScript", "Python", "Solidity"];

let range;

if (correct === 3) {
  range = 3;
}
if (correct === 2) {
  range = 2;
}
if (correct === 1) {
  range = 1;
}
  document.getElementById("after_submit").style.visibility="visible";

  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";

  document.querySelector("#message").addEventListener("check()", function(event) {
    document.getElementById("button").innerHTML+= "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
  }, false);
}
