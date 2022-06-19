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
    correct++;
  }
  if (question1 == "green") {
    correct++;
  }
  if (question1 == "blue") {
    correct++;
  }
  if (question1 == "black") {
    correct++;
  }

// Question2
if (question2 == "losAngeles") {
  correct++;
}
if (question2 == "portland") {
  correct++;
}
if (question2 == "austin") {
  correct++;
}
if (question2 == "newYorkCity") {
  correct++;
}

// Question3
if (question3 == "jazz") {
  correct++;
}
if (question3 == "punkRock") {
  correct++;
}
if (question3 == "hipHop") {
  correct++;
}
if (question3 == "classical") {
  correct++;
}

// Question4
if (question4 == "comedy") {
  correct++;
}
if (question4 == "action") {
  correct++;
}
if (question4 == "horror") {
  correct++;
}
if (question4 == "sci-fi") {
  correct++;
}

//Question5
if (question5 == "steak") {
  correct++;
}
if (question5 == "burgers") {
  correct++;
}
if (question5 == "noodles") {
  correct++;
}
if (question5 == "pizza") {
  correct++;
}
let message = ["JavaScript", "Python", "Solidity", "C++", "PHP"];

let range;

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
if (correct < 1) {
  range = 0;
}
  document.getElementById("after_submit").style.visibility="visible";

  document.getElementById("messsage").innerHTML = message[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
}


//User Interface Logic

