const convertToCelsius = function (fahrTemp) {
  let celsiusResult = (fahrTemp - 32) / 1.8;
  if (celsiusResult !== 0) {
    return +celsiusResult.toFixed(1);
  } else return 0;
};

const convertToFahrenheit = function (celsiusTemp) {
  let fahrResult = (celsiusTemp * 9) / 5 + 32;
  return +fahrResult.toFixed(1);
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(-340));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
