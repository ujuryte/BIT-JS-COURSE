import fs from 'node:fs/promises';
import * as readline from 'node:readline/promises'

// const masyvas = [
//     'Radiatorius',
//     'Palange',
//     'Spinta'
// ]

// await fs.writeFile('./database.json', JSON.stringify(masyvas));

// const database = await fs.readFile('./database.json', { encoding: 'utf-8' });

// // const database = await fs.readFile('./database.json', 'utf-8');

// console.log(JSON.parse(database));



import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const vardas = await rl.question('Iveskite savo varda:\n');

try {
    let database = await fs.readFile('./database.json', 'utf-8');

    database = JSON.parse(database);

    database.push(vardas);

    await fs.writeFile('./database.json', JSON.stringify(database));
} catch {
    await fs.writeFile('./database.json', JSON.stringify([vardas]));
}

rl.close();