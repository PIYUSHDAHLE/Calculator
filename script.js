//  Calculates the answer based on the values entered by the user.
function calculateAnswer() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var answer = "";

  /* The `switch` statement is used to perform different actions based on different conditions. In this
  case, it is used to determine the value of the `answer` variable based on the value of the
  `operator` variable. */
  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
    default:
      answer = "Invalid operator";
  }

  document.getElementById("answer").value = answer;
}

// Clears the value of the "answer" element in the document.
function clearAnswer() {
  document.getElementById("answer").value = "";
}

// Toggles the dark mode of the page.
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelectorAll(".container").forEach(function (container) {
    container.classList.toggle("dark-mode");
  });
}
