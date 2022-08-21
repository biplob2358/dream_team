function getInputById(inputId) {
  const inputFieldElement = document.getElementById(inputId);

  const inputFieldElementString = inputFieldElement.value;
  const inputFieldValue = parseInt(inputFieldElementString);
  inputFieldElement.value = "";

  return inputFieldValue;
}

function getTextElementById(elementId) {
  const textElement = document.getElementById(elementId);
  return textElement;
}
