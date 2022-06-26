window.onload = function() {

  let quiz = document.getElementById("quiz");

  let js = document.getElementById("js");
  js.style.display = "none";

  let rb = document.getElementById("rb");
  rb.style.display = "none";

  let cs = document.getElementById("cs");
  cs.style.display = "none";

  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

  let steak = 1
  let burger = 2
  let pizza = 3
    
  const q5 = parseInt(document.getElementById("q5").value);
    if (q5 === 1) {
      js.removeAttribute("style");
    } else if (q5 === 2) {
      rb.removeAttribute("style");
    } else (q5 === 3) {
      cs.removeAttribute("style");
    }
  }
}
