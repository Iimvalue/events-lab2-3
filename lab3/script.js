let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");
stopButton.addEventListener("click", () => {
  stopLight.style.backgroundColor = "red";
  slowLight.style.backgroundColor = "";
  goLight.style.backgroundColor = "";
});

slowButton.addEventListener("click", () => {
  slowLight.style.backgroundColor = "yellow";
  stopLight.style.backgroundColor = "";
  goLight.style.backgroundColor = "";
});

goButton.addEventListener("click", () => {
  slowLight.style.backgroundColor = "";
  stopLight.style.backgroundColor = "";

  goLight.style.backgroundColor = "green";
});
