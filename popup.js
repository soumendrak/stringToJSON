function convertStringToJson(str) {
  return str
    .replace(/True/g, 'true')
    .replace(/False/g, 'false')
    .replace(/None/g, 'null')
    .replace(/'/g, '"');
}

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

document.addEventListener('DOMContentLoaded', () => {
  const inputText = document.getElementById('inputText');
  const outputText = document.getElementById('outputText');
  const convertButton = document.getElementById('convertButton');
  const copyButton = document.getElementById('copyButton');

  convertButton.addEventListener('click', () => {
    const inputValue = inputText.value;
    const jsonOutput = convertStringToJson(inputValue);
    outputText.textContent = jsonOutput;
  });

  copyButton.addEventListener('click', () => {
    copyToClipboard(outputText.textContent);
  });
});
