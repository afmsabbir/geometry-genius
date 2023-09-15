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
