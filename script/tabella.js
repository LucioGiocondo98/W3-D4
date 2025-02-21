const allNumbers = [];
for (let i = 0; i <= 90; i++) {
    allNumbers.push(i);
}

const table = document.getElementById('container-for-table');
const extractedNumbers = new Set();

const allCellsofTable = function (allNumbers) {
    for (let i = 0; i < allNumbers.length; i++) {
        const cellsOfTable = document.createElement('div');
        cellsOfTable.classList.add('container-for-table');
        cellsOfTable.innerText = allNumbers[i];
        cellsOfTable.dataset.number = allNumbers[i];
        table.appendChild(cellsOfTable);
    }
};

allCellsofTable(allNumbers);

const buttonstart = document.getElementById('startButton');
const resultElement = document.getElementById('result'); // Ottieni l'elemento p

buttonstart.addEventListener('click', () => {
    let extractedNumber;
    do {
        extractedNumber = Math.floor(Math.random() * 91);
    } while (extractedNumbers.has(extractedNumber));

    extractedNumbers.add(extractedNumber);

    const cells = document.querySelectorAll('.container-for-table');
    cells.forEach(cell => {
        if (parseInt(cell.dataset.number) === extractedNumber) {
            cell.classList.add('extracted');
        }
    });

    resultElement.textContent = `Numero estratto: ${extractedNumber}`; 
});
