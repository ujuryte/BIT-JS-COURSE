import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';
import readline from 'node:readline/promises';
import chalk from 'chalk';

import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

const login = await rl.question('Iveskite prisijungimo varda:\n');
const password = await rl.question('Iveskite slaptazodi:\n');

if(login === 'admin' && password === '1234'){
    const vardas = faker.name.firstName();
    const pavarde = faker.name.lastName();
    const slaptazodis = faker.internet.password();
    const elpastas = faker.internet.email(vardas, pavarde);
    const gimtadienis = faker.date.birthdate();

    const bday = new Date(gimtadienis);
    //console.log(bday.toLocaleString('lt-LT')) // susigrazinti data ir laika
    // console.log(bday.toLocaleDateString('lt-LT')) // sugrazina tik data
    //console.log(bday.toLocaleTimeString('lt-LT')) // sugrazina tik laika

    const rezultatas = `${vardas}\t${pavarde}\t${slaptazodis}\t${elpastas}\t${bday.toLocaleDateString('lt-LT')}\n`;

    await fs.appendFile('./people.txt', rezultatas);
    console.log(chalk.bgGreen.white('Duomenys issaugoti'))
} else {
    console.log(chalk.bgRed.white("neteisingi duomenys"));
}

rl.close();



