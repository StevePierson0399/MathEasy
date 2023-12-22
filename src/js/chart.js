import { int_to_english, int_to_pronunciation, int_to_hindi } from "./translate.js";

const startInputField = document.getElementById('startField');
const endInputField = document.getElementById('endField');
const tableBody = document.getElementById("number-chart").getElementsByTagName("tbody")[0];

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

const MAX_VALUE = 10000000000;
const MIN_START_VALUE = 0;
const MAX_START_VALUE = MAX_VALUE - 10;

const generateTable = (start, end) => {
    tableBody.innerHTML = ""; // Clear existing rows

    // Loop from start to end, creating a new row for each iteration
    for (let i = start; i <= end; i++) {
        // Create a new row element
        const row = document.createElement("tr");

        // Create a header cell with the current index
        const numberCell = document.createElement("td");
        numberCell.textContent = i;

        // Create a data cell with the square of the current index
        const hindiCell = document.createElement("td");
        hindiCell.textContent = int_to_hindi(i);

        // Create a data cell with the square of the current index
        const engCell = document.createElement("td");
        engCell.textContent = `${int_to_english(i)} (${int_to_pronunciation(i)})`;

        // Append the cells to the row
        row.appendChild(numberCell);
        row.appendChild(hindiCell);
        row.appendChild(engCell);

        // Append the row to the table
        tableBody.appendChild(row);
    }
}

// Read data from localstorage
let start = parseInt(localStorage.getItem('start') || 0);
let end = parseInt(localStorage.getItem('end') || 10);

startInputField.value = start;
endInputField.value = end;

// Write data to localstorage
const writeCache = () => {
    let start = parseInt(startInputField.value) || 0;
    let end = parseInt(endInputField.value) || 10;

    localStorage.setItem('start', start);
    localStorage.setItem('end', end);

    generateTable(start, end);
};

// Write initial cache if not present in the browser
writeCache();

const updateValues = (inputField, minValue, maxValue, change) => {
    let inputValue = Math.min(maxValue, Math.max(minValue, (parseInt(inputField.value) + change))) || minValue;
    startInputField.value = inputValue;
    endInputField.value = inputValue + 10;

    writeCache();
};

const addInputListener = (inputField, minValue, maxValue, change) => {
    inputField.addEventListener('input', () => {
        updateValues(inputField, minValue, maxValue, change);
    });
};

// Event listener for input fields
addInputListener(startInputField, MIN_START_VALUE, MAX_START_VALUE, 0);
addInputListener(endInputField, 10, MAX_VALUE, 0);

// Toggle button for previous table
previousButton.addEventListener('click', () => {
    updateValues(startInputField, MIN_START_VALUE, MAX_START_VALUE, -10);
});

// Toggle button for next table
nextButton.addEventListener('click', () => {
    updateValues(startInputField, MIN_START_VALUE, MAX_START_VALUE, 10);
});

// Event listener on keyboard interactions
document.addEventListener('keydown', function (event) {
    let key = event.key;
    if (key === 'ArrowLeft') {
        previousButton.click();
    } else if (key === 'ArrowRight') {
        nextButton.click();
    } else if (key === 'ArrowUp' || key === 'ArrowDown') {
        event.preventDefault();
        updateValues(startInputField, MIN_START_VALUE, MAX_START_VALUE, key === 'ArrowUp' ? 1 : -1);
    }
});

