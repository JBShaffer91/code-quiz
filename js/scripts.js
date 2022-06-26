// Business Interface


// User Interface Logic
window.onload = function() {

  let quiz = document.getElementById("quiz");

  let form = document.querySelector("form");
  form.onsubmit = function(event) {

    const q5Input = document.getElementById("q5Input").value;

    document.querySelector("span#q5Input").radio = q1Input;
  }


 function check() {
   document.getElementById("after_submit").style.visibility="visible";
 }
};
