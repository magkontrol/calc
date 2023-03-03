"usestrict";
console.log(`privet`);

let firstInput = document.querySelector(".calc__first");
let secondInput = document.querySelector(".calc__second");
let operation = document.querySelector(".calc__operation");
let button = document.querySelector(".calc__button");
let output = document.querySelector(".calc__result");

// сложение
function sum(firstValue, secondValue) {
  if (!firstValue.length) {
    return "Заполните первое поле";
  }
  if (!secondValue.length) {
    return "Заполните второе поле";
  }
  if (isNaN(firstValue)) {
    return "В первом поле введите число";
  }
  if (isNaN(secondValue)) {
    return "Во втором поле введите число";
  }

  return +firstValue + +secondValue;
}

// вычитание
function subtraction(firstValue, secondValue) {
  if (!firstValue.length) {
    return "Заполните первое поле";
  }
  if (!secondValue.length) {
    return "Заполните второе поле";
  }
  if (isNaN(firstValue)) {
    return "В первом поле введите число";
  }
  if (isNaN(secondValue)) {
    return "Во втором поле введите число";
  }

  return +firstValue - +secondValue;
}

// умножение
function multiplication(firstValue, secondValue) {
  if (!firstValue.length) {
    return "Заполните первое поле";
  }
  if (!secondValue.length) {
    return "Заполните второе поле";
  }
  if (isNaN(firstValue)) {
    return "В первом поле введите число";
  }
  if (isNaN(secondValue)) {
    return "Во втором поле введите число";
  }

  return +firstValue * +secondValue;
}

// деление
function division(firstValue, secondValue) {
  if (!firstValue.length) {
    return "Заполните первое поле";
  }
  if (!secondValue.length) {
    return "Заполните второе поле";
  }
  if (isNaN(firstValue)) {
    return "В первом поле введите число";
  }
  if (isNaN(secondValue)) {
    return "Во втором поле введите число";
  }

  return +firstValue / +secondValue;
}

button.addEventListener("click", function () {
  switch (operation.value) {
    case "+":
      console.log("check");
      output.innerHTML = sum(firstInput.value, secondInput.value);
      break;
    case "-":
      console.log("check");
      output.innerHTML = subtraction(firstInput.value, secondInput.value);
      break;

    case "/":
      console.log("check");
      output.innerHTML = division(firstInput.value, secondInput.value);
      break;

    case "*":
      console.log("check");
      output.innerHTML = multiplication(firstInput.value, secondInput.value);
      break;

    default:
      break;
  }
});
