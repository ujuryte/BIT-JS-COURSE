import fs from 'node:fs/promises';
import * as readline from 'node:readline/promises';
import chalk from 'chalk';

import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const name = await rl.question('Vardas: ')
const surname = await rl.question('Pavarde: ')
const password = await rl.question('Slaptazodis: ')
const email = await rl.question('El. pastas: ')
const birthdate = await rl.question('Gimimo data(dd/mm/yy): ')

if (!name.trim() || !surname.trim() || !password.trim() || !email.trim() || !birthdate.trim()) {
    console.log(chalk.bgRed.white('Suveskite visus reikalingus duomenis'));
  } else if (!email.includes('@') && !email.includes('.')) {
    console.log(chalk.bgRed.white('Neteisingai ivestas el.pasto adresas'))
  } else {
    const userData = {
        name,
        surname,
        email,
        password,
        birthdate,
      };
      const users = [userData];
      await fs.appendFile('registrations.json', JSON.stringify(users) + '\n');
      console.log(chalk.bgGreen.black('Duomenys faile sėkmingai išsaugoti'))
  }

  rl.close()