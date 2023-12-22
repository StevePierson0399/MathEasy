const userInput = document.getElementById('userInput');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const tableBody = document.getElementById("multiplication-table").getElementsByTagName("tbody")[0];

// Read user input value from local storage
let inputValue = localStorage.getItem('inputValue') || 2;

const makeTable = (number) => {
    tableBody.innerHTML = ""; // Clear existing rows

    // Update the header text of the 4th column
    let headerColumn = document.getElementById("header-column");
    headerColumn.innerText = "Table of " + parseInt(number);

    for (let i = 1; i <= 10; i++) {
        let row = tableBody.insertRow(i - 1);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = parseInt(number);
        let cell2 = row.insertCell(1);
        cell2.innerHTML = "x " + i;
        let cell3 = row.insertCell(2);
        cell3.innerHTML = parseInt(number) * i;
    }
}

const limitInputValue = (input, change = 0) => {
    let inputValue = Math.min(120, Math.max(2, (parseInt(input) + change))) || 2;
    userInput.value = inputValue;
    makeTable(inputValue);

    // Catched user input value to local storage
    localStorage.setItem('inputValue', inputValue);
}

// Show initial values
limitInputValue(inputValue);

// Event listeners on input field and button
userInput.addEventListener('input', (e) => limitInputValue(e.target.value));
previousButton.addEventListener('click', () => limitInputValue(userInput.value, -1));
nextButton.addEventListener('click', () => limitInputValue(userInput.value, 1));

// Map keyboard keys 
document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown') {
        event.preventDefault();
        let step = (key === 'ArrowLeft' || key === 'ArrowDown') ? -1 : 1;
        limitInputValue(userInput.value, step);
    }
});

