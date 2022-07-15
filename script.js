const buttons = document.querySelectorAll(".percentage");
const input = document.getElementById("input");

for (let button of buttons) {
  button.addEventListener("click", () => {
    if (input.value == "") {
      return;
    }
    let result = input.value * button.value;
    input.value = "$" + result;
  });
}

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  input.value = "";
});
