var convertTemperature = function (celsius) {
  kelvin = celsius + 273.15;
  fahrennheit = celsius * 1.8 + 32.0;

  return [kelvin, fahrennheit];
};
