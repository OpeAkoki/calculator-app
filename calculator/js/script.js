const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator button");

// click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // get the value of each button
    const value = button.textContent;

    // handle the 'del' button
    if (button.id === "del") {
      // remove  last character from the display
      display.value = display.value.slice(0, -1);
    } else if (button.id === "clear") {
      display.value = "";
    } else if (value === "=") {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
});
