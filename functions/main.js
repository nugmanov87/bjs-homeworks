// 1 задание

"use strict";
function getSolutions(a, b, c) {
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    return {
      D
    };
  } else if (D == 0) {
    let x = -b / (2 * a);
    return {
      roots: [x],
      D
    };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {
      roots: [x1, x2],
      D
    };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  } else if (result.D > 0) {
    console.log(
      `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${
        result.roots[1]
      }`
    );
  }
}

// 2 задание

function getAverageScore(data) {
  let object = {
    algebra: [5, 3, 3, 2],
    geometry: [4, 1, 5, 4],
    russian: [5, 5, 3],
    physics: [3, 4, 5, 5, 5],
    music: [4, 4, 5, 5],
    english: [3, 5, 5, 5, 4],
    poetry: [3, 2, 2, 3],
    chemistry: [4, 5, 4, 3, 5],
    french: [3, 5, 5, 5, 4],
    geografy: [5, 4, 4, 5]
  };

  for (let prop in object) {
    let value = object[prop];
    console.log(`Свойство ${prop}, значение: ${value}`);
  }
}

getAverageScore();

// 3 задание
function getPersonData(secretData) {
  let person = {
    firstName: "Эмильо",
    lastName: "Родриго"
  };
  return person;
}

function pirates(number) {
  let aaa = (person.firstName = 1);
  let bbb = (person.lastName = 0);
  return {
    aaa,
    bbb
  };
}

console.log(getPersonData({ aaa: 1, bbb: 1 }));
