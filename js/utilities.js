// take value from input field function
function getInputById(inputId) {
  const inputFieldElement = document.getElementById(inputId);

  const inputFieldElementString = inputFieldElement.value;
  const inputFieldValue = parseInt(inputFieldElementString);
  inputFieldElement.value = "";

  return inputFieldValue;
}

// take value from text field function
function getTextElementById(elementId) {
  const textElement = document.getElementById(elementId);
  return textElement;
}
