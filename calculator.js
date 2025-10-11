const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

let isOn = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.value;

    if (value === "ON/OFF") {
      if (isOn) {
        isOn = false;
        screen.value = "";
        value.disabled = true;
      } else {
        isOn = true;
        screen.value = "0";
        value.disabled = false;
      }
    } else if (isOn) {
      if (value === "C") {
        screen.value = "0";
      } else if (value === "B/S") {
        screen.value = screen.value.slice(0, -1) || "0";
      } else if (value === "=") {
        try {
          if (screen.value.includes("/0")) {
            screen.value = "error";
          } else {
            screen.value = eval(screen.value);
          }
        } catch {
          screen.value = "error";
        }
      } else if (value === ".") {
        if (screen.value === "") {
          screen.value = "0.";
        } else if (!screen.value.includes(".")) {
          screen.value += ".";
        }
      } else if (screen.value === "0") {
        screen.value = value;
      } else {
        screen.value += value;
      }
    }
  });
});
