function getInputField(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldText = inputField.value;
  const input = parseFloat(inputFieldText);
  return input;
}

function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// isNaN :
function isNanValue(value1, value2) {
  if (isNaN(value1) || isNaN(value2)) {
    alert("please insert Number.");
    return;
  }
}

// add to calculation entry:
function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const p = document.createElement("p");
  const count = calculationEntry.childElementCount;
  p.classList.add("my-3")
  p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup>`;
  calculationEntry.appendChild(p);
}
