// 1- Press one number then save that number
// 2- Press the operator
// 3- Press the second Number then save that second number
// 4- Press equal sign then make the calculation
let firstNumber;
let secondNumber;
let firstNumArray = [];
let secondNumArray = [];
let operation;
let step = 0;
let result = 0;

function getNumber(num) {
  if (step == 0 || step == 1) {
    firstNumArray.push(num);
    step = 1;
    firstNumber = Number(firstNumArray.join(""));
    display.value = firstNumber;
  } else if (step == 2) {
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(""));
    display.value = secondNumber;
  }
}

function getOperator(op) {
  secondNumArray = [];
  step = 2;
  operation = op;
}

function clearDisplay() {
  display.value = 0;
  firstNumber = null;
  secondNumber = null;
  step = 0;
  operation = null;
  result = 0;
  firstNumArray = [];
  secondNumArray = [];
}
const calculateEquals = () => {
  if (operation == "+") {
    result = firstNumber + secondNumber;
    firstNumber = result;
    firstNumArray = [];
    secondNumArray = [];
    step = 1;
    display.value = result;
  }
  if (operation == "-") {
    result = firstNumber - secondNumber;
    firstNumber = result;
    firstNumArray = [];
    secondNumArray = [];
    step = 1;
    display.value = result;
  }
  if (operation == "*") {
    result = firstNumber * secondNumber;
    firstNumber = result;
    firstNumArray = [];
    secondNumArray = [];
    step = 1;
    display.value = result;
  }
  if (operation == "/") {
    result = Math.round((firstNumber / secondNumber) * 100) / 100;
    firstNumber = result;
    firstNumArray = [];
    secondNumArray = [];
    step = 1;
    display.value = result;
  }
};
// let firstNumber;
// let secondNumber;
// let operation;
// let step = 0;
// let result = 0;
// let firstNumArray = [];
// let secondNumArray = [];

// let display = document.querySelector("#display");

// function getNumber(num) {
//   if (step == 0 || step == 1) {
//     firstNumArray.push(num); // [1,3,5]
//     step = 1;
//     firstNumber = Number(firstNumArray.join(""));
//     display.value = firstNumber;
//   } else if (step == 2) {
//     secondNumArray.push(num);
//     secondNumber = Number(secondNumArray.join(""));
//     display.value = secondNumber;
//   }
// }

// function getOperator(op) {
//   step = 2;
//   operation = op;
// }

// function clearDisplay() {
//   display.value = 0;
//   firstNumber = null;
//   secondNumber = null;
//   step = 0;
//   operation = null;
//   result = 0;
//   firstNumArray = [];
//   secondNumArray = [];
// }

// const calculateEquals = () => {
//   if (operation === "+") {
//     result = firstNumber + secondNumber;
//     display.value = result;
//     firstNumber = result;
//   } else if (operation === "-") {
//     result = firstNumber - secondNumber;
//     display.value = result;
//   } else if (operation === "*") {
//     result = firstNumber * secondNumber;
//     display.value = result;
//   } else if (operation === "/") {
//     result = firstNumber / secondNumber;
//     display.value = result;
//   }
// };
