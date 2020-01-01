// Default state
let state = {
  cVal: "",
  fVal: ""
}

let button = document.getElementById("button");
let cInput = document.getElementById('c-input');
let fInput = document.getElementById('f-input');

button.addEventListener("click", () => {

  button.className = 'reset-btn';
  button.innerHTML = "RESET";
  console.log('clicked');
});
