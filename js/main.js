let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";

for (let item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    // Convert display symbols to calculation symbols
    if (buttonText == "×") {
      buttonText = "*";
    } else if (buttonText == "÷") {
      buttonText = "/";
    } else if (buttonText == "−") {
      buttonText = "-";
    }

    if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      try {
        screen.value = eval(screenValue);
        screenValue = screen.value;
      } catch (error) {
        screen.value = "Error";
        screenValue = "";
      }
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
