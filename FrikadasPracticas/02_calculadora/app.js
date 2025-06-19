function addition() {
  const value1 = document.getElementById("numberOne").value;
  const value2 = document.getElementById("numberTwo").value;
  result = parseInt(value1) + parseInt(value2);
  console.log(result);
  const mostrarResult = document.getElementById("showResult");
  mostrarResult.textContent = "El resultado es " + result;
  return result;
}

function substract() {
  const value1 = document.getElementById("numberOne").value;
  const value2 = document.getElementById("numberTwo").value;
  result = parseInt(value1) - parseInt(value2);
  console.log(result);
  const mostrarResult = document.getElementById("showResult");
  mostrarResult.textContent = "El resultado es " + result;
  return result;
}

function multiplication() {
  const value1 = document.getElementById("numberOne").value;
  const value2 = document.getElementById("numberTwo").value;
  result = parseInt(value1) * parseInt(value2);
  console.log(result);
  const mostrarResult = document.getElementById("showResult");
  mostrarResult.textContent = "El resultado es " + result;
  return result;
}

function divition() {
  const value1 = document.getElementById("numberOne").value;
  const value2 = document.getElementById("numberTwo").value;
  result = parseInt(value1) / parseInt(value2);
  console.log(result);
  const mostrarResult = document.getElementById("showResult");
  mostrarResult.textContent = "El resultado es " + result;
  return result;
}
