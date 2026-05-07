let currentInput = '0';
let calculationDone = false;
const displayElement = document.getElementById('display');
const historyElement = document.getElementById('history');

function updateDisplay() {
    displayElement.innerText = currentInput;

    if (currentInput.length > 8) {
        displayElement.classList.replace('text-5xl', 'text-3xl');
    } else {
        displayElement.classList.replace('text-3xl', 'text-5xl');
    }
}

function appendNumber(number) {
    if (calculationDone) {
        currentInput = number;
        calculationDone = false;
    } else {
        if (currentInput === '0' && number !== '.') {
            currentInput = number;
        } else {
            if (number === '.' && currentInput.includes('.')) return;
            currentInput += number;
        }
    }
    updateDisplay();
}

function appendOperator(op) {
    if (calculationDone) calculationDone = false;

    const lastChar = currentInput.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
    } else {
        currentInput += op;
    }
    updateDisplay();
}

function calculate() {
    try {
        historyElement.innerText = currentInput + ' =';
        let result = eval(currentInput);
        currentInput = Number.isInteger(result) ? result.toString() : result.toFixed(4).toString();
        calculationDone = true;
        updateDisplay();
    } catch (error) {
        currentInput = "Erro";
        updateDisplay();
        setTimeout(clearDisplay, 1500);
    }
}

function deleteDigit() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    historyElement.innerText = '';
    calculationDone = false;
    updateDisplay();
}