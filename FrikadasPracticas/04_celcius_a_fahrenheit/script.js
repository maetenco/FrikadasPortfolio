function toF() {
  const temperature = document.getElementById("temperatura").value;
  console.log("clickando el boton", temperature);
  const result = (temperature * 9) / 5 + 32;
  const innerResult = document.getElementById("result");
  innerResult.textContent = `Son ${result} grados Fahrenheit`;
  console.log(result);
  return result;
}

function toC() {
  const temperature = document.getElementById("temperatura").value;
  console.log("clickando el otro botón", temperature);
  const result = ((temperature - 32) * 5) / 9;
  const innerResult = document.getElementById("result");
  innerResult.textContent = `Son ${result} grados Celsius`;
  console.log(result);
  return result;
}
// F = (C * 9 / 5 ) + 32
// C = (F - 32) * 5/9
