const convertToCelsius = function (inFahren) {

  toCelsius = (inFahren - 32) * 5 / 9;
  toCelsius = Math.round(toCelsius * 10) / 10
  return toCelsius
};
convertToCelsius(100)
const convertToFahrenheit = function (inCelsius) {

  toFahren = (inCelsius * 9 / 5 + 32);
  toFahren = Math.round(toFahren * 10) / 10
  return toFahren
}
convertToFahrenheit(32)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
