const min = 1;
const max = 10;
// const numRandom = 8;
const numRandom = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numRandom);
let vidas = 3;

function probando() {
  const numeroUsuario = document.getElementById("adivinando");
  console.log(numeroUsuario);
  if (vidas > 0) {
    if (numeroUsuario.value == numRandom) {
      const newElement = document.createElement("p");
      newElement.textContent = `Felicidades el número oculto era ${numeroUsuario.value}`;
      const area = document.getElementById("contentArea");
      area.append(newElement);
    } else if (numeroUsuario.value > numRandom) {
      const newElement = document.createElement("p");
      newElement.textContent = `Prueba con un número menor`;
      const area = document.getElementById("contentArea");
      area.append(newElement);
      vidas--;
      console.log(vidas);
      numeroUsuario.value = "";
    } else if (numeroUsuario.value < numRandom) {
      const newElement = document.createElement("p");
      newElement.textContent = `Prueba con un número mayor`;
      const area = document.getElementById("contentArea");
      area.append(newElement);
      vidas--;
      console.log(vidas);
      numeroUsuario.value = "";
    }
  } else if (vidas === 0) {
    console.log("Se te acabaron las vidas");
    const newElement = document.createElement("p");
    newElement.textContent = `Ya no quedan vidas para jugar :(`;
    const area = document.getElementById("contentArea");
    area.append(newElement);
  }
}
