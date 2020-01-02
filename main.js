// Default state
let state = {
  cVal: "",
  fVal: ""
}

let button = document.getElementById("button");
let cInput = document.getElementById('c-input');
let fInput = document.getElementById('f-input');

// Functions to convert temperatures
const cToF = c => ((c * 9) / 5 + 32).toFixed(1);
const fToC = f => ((f - 32) * (5 / 9)).toFixed(1);

const convert = () => {
  // if there is no value in celcius or fahrenheit box, do nothing
  if (button.className === "submit-btn" && cInput.value === "" && fInput.value === "") {
    return
  }

  // if there is a value in the celcius box, save it to state.cVal
  if (cInput.value !== "" && fInput.value === "") {
    state.cVal = cInput.value;
    // take the current state.cVal and pass it to the cToF function to convert to fahrenheit, display the conversion in the fahrenheit box
    fInput.value = cToF(state.cVal);
    // but if there's a value in the fahrenheit box, save it to the state.fVal
  } else if (fInput.value !== "" && cInput.value === "") {
    state.fVal = fInput.value;
    // take the current state.fVal and pass it to the fToC function to convert to celcius, display the conversion in the celcius box
    cInput.value = fToC(state.fVal);
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
}

button.addEventListener("click", convert);