document.getElementById("convertButton").addEventListener("click", function () {
    const input = parseFloat(document.getElementById("temperatureInput").value);
    const unit = document.getElementById("unitSelect").value;
    let convertedTemperature;
    let convertedUnit;
  
    if (isNaN(input)) {
      document.getElementById("result").innerHTML = "Invalid input!";
      return;
    }
  
    if (unit === "celsius") {
      convertedTemperature = (input * 9/5) + 32;
      convertedUnit = "Fahrenheit";
    } else if (unit === "fahrenheit") {
      convertedTemperature = (input - 32) * 5/9;
      convertedUnit = "Celsius";
    } else if (unit === "kelvin") {
      convertedTemperature = input - 273.15;
      convertedUnit = "Celsius";
    }
  
    document.getElementById("result").innerHTML = `${input.toFixed(2)} ${unit} is ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
  });
  