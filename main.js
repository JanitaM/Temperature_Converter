// Default state
let state = {
  cVal: "",
  fVal: ""
}

let button = document.getElementById("button");
let cInput = document.getElementById('c-input');
let fInput = document.getElementById('f-input');


const convert = () => {
  // if there is a value in the celcius box, save it to state.cVal
  if (cInput.value !== "" && fInput.value === "") {
    state.cVal = cInput.value;
    // but if there's a value in the fahrenheit box, save it to the state.fVal
  } else if (fInput.value !== "" && cInput.value === "") {
    state.fVal = fInput.value;
  }

  // if the button is "submit", change it to "reset"
  if (button.className === "submit-btn") {
    button.className = 'reset-btn';
    button.innerHTML = "RESET";
    // but if the button is "reset", change it to "submit" and clear all values and displays
  } else if (button.className === "reset-btn") {
    button.className = 'submit-btn';
    button.innerHTML = "SUBMIT";
    state.cVal = "";
    cInput.value = "";
    state.fVal = "";
    fInput.value = ""
  }

  console.log(state)
}

button.addEventListener("click", convert);

/*
4) Write a function that converts fahrenheit, given as an argument, to celcius.
const fToC = f => (f - 32) * (5 / 9);

5) Write a function that converts celcius, given as an argumen, to fahrenheit.
const cToF = c => (c * 9) / 5 + 32;
*/