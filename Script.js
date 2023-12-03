
function toDisplay(value) {
  document.getElementById('inpbox').value += value;
}

function toClear() {
  document.getElementById('inpbox').value = '';
}

function calculateResult() {
  try {
    document.getElementById('inpbox').value = eval(document.getElementById('inpbox').value);
  } catch (error) {
    document.getElementById('inpbox').value = 'Error';
  }
}