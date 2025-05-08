let channels = document.getElementsByClassName("channel")[0];
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let tvShowImage = document.querySelector("#screen").firstElementChild;

let arrayImages = [
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg",
];

console.log(tvShowImage);

one.addEventListener("click", () => {
  if (tvShowImage !== arrayImages[0]) tvShowImage.src = arrayImages[0];
});

two.addEventListener("click", () => {
  if (tvShowImage !== arrayImages[1]) tvShowImage.src = arrayImages[1];
});

three.addEventListener("click", () => {
  if (tvShowImage !== arrayImages[2]) tvShowImage.src = arrayImages[2];
});

four.addEventListener("click", () => {
  if (tvShowImage !== arrayImages[3]) tvShowImage.src = arrayImages[3];
});

five.addEventListener("click", () => {
  if (tvShowImage !== arrayImages[4]) tvShowImage.src = arrayImages[4];
});

six.addEventListener("click", () => {
  if (tvShowImage !== arrayImages[5]) tvShowImage.src = arrayImages[5];
});

seven.addEventListener("click", () => {
  if (tvShowImage !== arrayImages[6]) tvShowImage.src = arrayImages[6];
});

eight.addEventListener("click", () => {
  if (tvShowImage !== arrayImages[7]) tvShowImage.src = arrayImages[7];
});

nine.addEventListener("click", () => {
  if (tvShowImage !== arrayImages[8]) tvShowImage.src = arrayImages[8];
});
