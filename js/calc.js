"usestrict";
console.log(`privet`);

let firstInput = document.querySelector(".calc__first");
let secondInput = document.querySelector(".calc__second");
let operation = document.querySelector(".calc__operation");
let button = document.querySelector(".calc__button");
let output = document.querySelector(".calc__result");

function sum() {}

button.addEventListener("click", function () {
  switch (operation.value) {
    case "+":
      console.log("check");
      output.innerHTML = +firstInput.value + +secondInput.value;
      break;
    case "-":
      console.log("check");
      output.innerHTML = +firstInput.value - +secondInput.value;
      break;

    case "/":
      console.log("check");
      output.innerHTML = +firstInput.value / +secondInput.value;
      break;

    case "*":
      console.log("check");
      output.innerHTML = +firstInput.value * +secondInput.value;
      break;

    default:
      break;
  }
});
