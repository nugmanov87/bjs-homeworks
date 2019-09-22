"use strict";
function initCheckBirthday() {
  const birthday = document.getElementById("birthday").value;

  const result = checkBirthday(birthday) ? "Да" : "Нет";

  document.getElementById("disclaimer").innerHTML = result;
}

function checkBirthday(birthday) {
  let dateNow = Date.now();
  let date = new Date(birthday);
  birthday = +date;
  let diff = dateNow - birthday;
  let age = Math.floor((diff / 1000 / 60 / 60 / 24 / (365 * 4 + 1)) * 4);
  if (age >= 18) {
    return true;
  }
}

function initPrintAnimalSound() {
  const animal = {
    sound: "grrrr"
  };

  const result = getAnimalSound(animal);

  document.getElementById("sound").innerHTML = result;
}

function getAnimalSound(animal) {
  if (animal === undefined) {
    return null;
  } else {
    let sound = animal.sound;
    return sound;
  }
}

function initCalculateStatement() {
  for (let idx = 0; idx < 3; idx++) {
    const marks = document.getElementById("learner-" + idx).value.split(",");

    const average = getAverageMark(marks);

    document.getElementById("learner-" + idx + "-average").innerHTML = average;
  }
}

function getAverageMark(marks) {
  let value = 0;
  for (let i = 0; i < marks.length; i++) {
    value += Number(marks[i]);
  }
  let roundedAverage = value / marks.length;
  return Math.round(roundedAverage);
}
