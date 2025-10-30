const inputNumberElement = document.getElementById("input-el");
const convertButton = document.getElementById("convert-btn");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

document.addEventListener("DOMContentLoaded", () => {
  inputNumberElement.textContent = "1";
  render("1");
});

convertButton.addEventListener("click", function () {
  const number = inputNumberElement.textContent;
  if (!isInputValid(number)) {
    alert("Enter A valid positive number!");
    clearInput();
  } else {
    render(number);
  }
});

function meterToFeet(number) {
  return (number * 3.280839895).toFixed(2);
}

function feetToMeter(number) {
  return (number * 0.3048).toFixed(2);
}

function literToGallon(number) {
  return (number * 0.2641720524).toFixed(2);
}

function gallonToLiter(number) {
  return (number * 3.785411784).toFixed(2);
}

function kiloToPound(number) {
  return (number * 2.2046226218).toFixed(2);
}

function poundToKilo(number) {
  return (number * 0.45359237).toFixed(2);
}

function isInputValid(input_) {
  //This function checks whether the input_ is a valid non-negative number or not
  const trimmed = input_.trim();
  let isIt = true;

  if (trimmed === "") {
    isIt = false;
  } else {
    const number = Number(trimmed);

    if (isNaN(number)) {
      isIt = false;
    } else {
      if (number < 0) {
        isIt = false;
      }
    }
  }

  return isIt;
}

function clearInput() {
  inputNumberElement.textContent = "";
}

function renderLength(number) {
  if (number === "") {
    lengthResult.textContent = `?? meter = ?? foot | ?? foot = ?? meter`;
  } else if (number <= 1) {
    lengthResult.textContent = `${number} meter = ${meterToFeet(
      number
    )} feet | ${number} foot = ${feetToMeter(number)} meters`;
  } else {
    lengthResult.textContent = `${number} meters = ${meterToFeet(
      number
    )} feet | ${number} feet = ${feetToMeter(number)} meters`;
  }
}

function renderVolume(number) {
  if (number === "") {
    volumeResult.textContent = `?? liter = ?? gallons | ?? gallon = ?? liter`;
  } else if (number <= 1) {
    volumeResult.textContent = `${number} liter = ${literToGallon(
      number
    )} gallons | ${number} gallon = ${gallonToLiter(number)} liters`;
  } else {
    volumeResult.textContent = `${number} liters = ${literToGallon(
      number
    )} gallons | ${number} gallons = ${gallonToLiter(number)} liters`;
  }
}

function renderMass(number) {
  if (number === "") {
    massResult.textContent = `?? kilo = ?? pounds | ?? pound = ?? kilos`;
  } else if (number <= 1) {
    massResult.textContent = `${number} kilo = ${kiloToPound(
      number
    )} pounds | ${number} pound = ${poundToKilo(number)} kilos`;
  } else {
    massResult.textContent = `${number} kilos = ${kiloToPound(
      number
    )} pounds | ${number} pounds = ${poundToKilo(number)} kilos`;
  }
}

function render(number) {
  console.log(number);
  renderLength(number);
  renderVolume(number);
  renderMass(number);
}
