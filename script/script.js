const allCellsofTable = function(allNumbers){
    for(let i =0; i< allNumbers.length;i++){
        const cellsOfTable = document.createElement('div')
        cellsOfTable.classList.add('container-for-table')
        cellsOfTable.innerText = allNumbers [i];
        console.log(cellsOfTable)
        const table = document.getElementById('container-for-table')
        table.appendChild(cellsOfTable)
        
    }}
    const allNumbers =[];
    for (let i = 0; i <= 90; i++){
        allNumbers.push(i)
        }

    /*let randomNumber = Math.floor(Math.random() * 91);
   

const buttonForStart = document.getElementById('start-button')
function(){
    buttonForStart.addEventListener('click', (e))
}
  ;*/
  const getRandomNumber = function() {
    return Math.floor(Math.random() * 90) + 1; 
};


const buttonForStart = document.getElementById('startButton');
buttonForStart.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.getElementById('result').innerText = "Numero casuale: " + randomNumber;  
});


    
 

allCellsofTable(allNumbers)
    



