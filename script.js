let result = document.getElementById('result');
const input = document.getElementById('inputyour');

function appendNumber(number) {

  inputyour.value += number;
}

function appendOperator(operator) {
  inputyour.value += operator;
}

function clearResult() {
  inputyour.value = '';
  result.value = '';
}
input.addEventListener('keypress', function(e) {
  const code = e.keyCode || e.which;
  if (code === 13) {
    calculateResult();
  }
});

function calculateResult() {
  try {
    result.value = eval(inputyour.value);
    inputyour.value = eval(inputyour.value);
  } catch (error) {
    inputyour.value = 'Error';
    result.value = 'Error';
  }
}