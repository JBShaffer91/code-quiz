window.onload = function() {

  let quiz = document.getElementById("quiz");

  let js = document.getElementById("js");
  js.style.display = "none";

  let rb = document.getElementById("rb");
  rb.style.display = "none";

  let cs = document.getElementById("cs");
  cs.style.display = "none";

  let submit = document.getElementById("submit");
  submit.onclick = function(event) {
    event.preventDefault();
    if ("mc5" === 3) {
      js.removeAttribute("style");
    } else if ("mc5" === 2) {
      rb.removeAttribute("style");
    } else {
      cs.removeAttribute("style");
    }
  };

  let reset = document.getElementById("reset");
  reset.onclick = function(event) {
    window.location.reload(true);
  }
};
