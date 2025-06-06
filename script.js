console.log('Calculator initialized');
const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    const ans = eval(display.value);
    display.value = ans;
}