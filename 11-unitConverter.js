function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  const celsiusTemp = 20;
  const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
  console.log(`${celsiusTemp} degrees Celsius is ${fahrenheitTemp} degrees Fahrenheit.`); // Output: "20 degrees Celsius is 68 degrees Fahrenheit."
    