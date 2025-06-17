const btnSubtract = document.getElementById("subtract");
const btnReset = document.getElementById("reset");
const btnAdd = document.getElementById("add");
let counter = document.getElementById("counter");

btnSubtract.addEventListener("click", () => {
  console.log("clicked!");
  if (counter.textContent <= 0) {
    document.counter.classList("negative");
    // counter.style.color = "red";
  }
  counter.textContent--;
});

btnReset.addEventListener("click", () => {
  console.log("clicked reset!");
  counter.textContent = 0;
});

btnAdd.addEventListener("click", () => {
  console.log("clicked add!");
  if (counter.textContent >= 0) {
    // counter.textContent++;
    counter.style.color = "blue";
  }
  counter.textContent++;
});

console.log(typeof counter.textContent);
console.log(parseInt(counter.textContent));
