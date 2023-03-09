// commonjs importavimo perrasymas i modulio schema:

// const os = require('node:os');

// import os from 'node:os';

// console.log(os.totalmem())
// console.log(os.platform())
// console.log(os.homedir())
// console.log(os.freemem())
// console.log(os.cpus())

// import * as readline from 'node:readline';

// import { stdin as input, stdout as output } from 'node:process';

// // const input = process.stdin
// // const output = process.stdout

// const rl = readline.createInterface({ input, output });

// rl.question('Kiek jums yra metu?', (metai) => {
//     rl.question('Koks jusu vardas?', (vardas) => {
//         rl.question('Koks miestas?', (miestas) => {
//             rl.question('Sunys ar kates?', (gyvunas) => {
//                 rl.question('Jusu zodiakas?', (zodiakas) => {
//                     console.log(`Jusu duomenys:`)
//                     console.log(`Metai:`, metai)
//                     console.log(`Vardas:`, vardas)
//                     console.log(`Miestas:`, miestas)
//                     console.log(`Gyvunas:`, gyvunas)
//                     console.log(`Zodiakas:`, zodiakas)
//                     rl.close();
//                 });
                
//             });
            
//         });
        
//     });
    
// });

import * as readline from 'node:readline/promises';

import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const metai = await rl.question('Kiek jums yra metu?');
const vardas = await rl.question('Koks vardas?');
const miestas = await rl.question('Koks miestas?');
const gyvunas = await rl.question('Sunys ar kates?');
const zodiakas = await rl.question('Koks zodiakas?');

console.log(`Jusu duomenys:`)
console.log(`Metai:`, metai)
console.log(`Vardas:`, vardas)
console.log(`Miestas:`, miestas)
console.log(`Gyvunas:`, gyvunas)
console.log(`Zodiakas:`, zodiakas)

rl.close();



