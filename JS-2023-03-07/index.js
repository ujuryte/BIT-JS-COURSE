//document nodejs aplinkoje neegzistuoja
//window taip pat

// const vardas = "Jonas";
// let pavarde = "Jonaitis";

// for(let i = 0; i <500; i++){
//     console.log(`${vardas} ${pavarde}`);
// }
// setInterval(() => console.log('Sveiki Visi'), 1000);

// console.log('pakeitimas');

//kiek reiksmiu talpinama pagal terminalo dydi:
// console.log(process.stdout.columns);
// console.log(process.stdout.rows);

import chalk from 'chalk';

let l = 1;
let yellow = '';
let green = '';
let red = '';

while(l<41){
    yellow+= '*';

    if(l % 20 === 0)
        yellow+= "\n";
    
    l++
}

 let t = 1

while(t<41){
    green+= '*';

    if(t % 20 === 0)
        green+= "\n";
    
    t++
}

let u =1;

while(u<41){
    red+= '*';

    if(u % 20 === 0)
        red+= "\n";
    
    u++
}

let yellowCol = chalk.bgYellow(yellow)
let greenCol = chalk.bgGreen(green.slice(1))
let redCol = chalk.bgRed(red.slice(1))

console.log(yellowCol,greenCol,redCol)



// const abecele = "abcdefghijklmnopqrstuvwxyz"

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

let matrix = [];

function getRandomCharacter() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function initializeMatrix() {
  matrix = [];

  for (let i = 0; i < process.stdout.rows; i++) {
    const row = [];

    for (let j = 0; j < process.stdout.columns; j++) {
      row.push(getRandomCharacter());
    }

    matrix.push(row);
}
}

function updateRow(rowIndex) {
    for (let j = 0; j < matrix[rowIndex].length; j++) {
      const newCharacter = chalk.green(getRandomCharacter());
      matrix[rowIndex][j] = newCharacter;
    }
  }
  
  function displayRow(rowIndex) {
    const line = matrix[rowIndex].join('');
    readline.cursorTo(process.stdout, 0, rowIndex);
    process.stdout.write(line);
  }
  
  initializeMatrix();
  
  let rowIndex = 0;
  
  setInterval(() => {
    updateRow(rowIndex);
    displayRow(rowIndex);
    rowIndex = (rowIndex + 1) % matrix.length;
  }, 50);
