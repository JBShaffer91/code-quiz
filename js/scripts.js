// Business Logic
function check() {

  let question1 = document.quiz.question1.value;
  let question2 = document.quiz.question2.value;
  let question3 = document.quiz.question3.value;
  let question4 = document.quiz.question4.value;
  let question5 = document.quiz.question5.value;
  let correct = 0

  // Question1
  if (question1 == "yellow") {
    correct = 5;
  }
  if (question1 == "green") {
    correct = 3;
  }
  if (question1 == "blue") {
    correct = 1;
  }
  if (question1 == "black") {
    correct = 2;
  }

// Question2
if (question2 == "losAngeles") {
  correct = 4;
}
if (question2 == "portland") {
  correct = 3;
}
if (question2 == "austin") {
  correct = 2;
}
if (question2 == "newYorkCity") {
  correct = 5;
}

// Question3
if (question3 == "jazz") {
  correct = 2;
}
if (question3 == "punkRock") {
  correct = 1;
}
if (question3 == "hipHop") {
  correct = 3;
}
if (question3 == "classical") {
  correct = 4;
}

// Question4
if (question4 == "comedy") {
  correct = 5;
}
if (question4 == "action") {
  correct = 1;
}
if (question4 == "horror") {
  correct = 2;
}
if (question4 == "sci-fi") {
  correct = 4;
}

//Question5
if (question5 == "steak") {
  correct = 3;
}
if (question5 == "burgers") {
  correct = 4;
}
if (question5 == "noodles") {
  correct = 1;
}
if (question5 == "pizza") {
  correct = 5;
}

// Scoring
let message = ["JavaScript", "Python", "Solidity", "C++", "PHP"];

let range;

if (correct = 5) {
  range = 5;
}
if (correct < 5) {
  range = 4;
}
if (correct < 4) {
  range = 3;
}
if (correct < 3) {
  range = 2;
}
if (correct < 2) {
  range = 1;
}
  document.getElementById("after_submit").style.visibility="visible";

  document.getElementById("messsage").innerHTML = "message[range]";
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
}
