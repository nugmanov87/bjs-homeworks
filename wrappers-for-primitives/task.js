"use strict";
function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let date = window.date.value;

  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  for (let i = 0; i < 3; i++) {
    if (
      (typeof arguments[i] != "number" &&
        typeof Number(arguments[i]) != "number") ||
      isNaN(Number(arguments[i]))
    ) {
      let argName;
      switch (i) {
        case 0:
          argName = "percent";
          break;
        case 1:
          argName = "contribution";
          break;
        case 2:
          argName = "amount";
          break;
      }
      return `Параметр ${argName} содержит неправильное значение ${arguments[i]}`;
    }
  }
  percent /= 100;
  let p = percent / 12;
  let nowDate = new Date();
  let fullTimeMortage = Math.round(
    (Date.parse(date) - Date.parse(nowDate)) / 1000 / 60 / 60 / 24 / 30
  );
  let creditSum = amount - contribution;
  let paymentMonth = creditSum * (p + p / ((1 + p) ** fullTimeMortage - 1));
  let totalAmount = paymentMonth * fullTimeMortage;
  console.log(totalAmount.toFixed(2));
  return totalAmount.toFixed(2);
}

function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  if (isNaN(name)) {
    return `Привет, мир! Меня зовут ${name} `;
  } else {
    return `Привет, мир! Меня зовут Аноним`;
  }
}
