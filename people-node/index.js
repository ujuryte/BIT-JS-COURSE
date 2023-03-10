import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';
import * as readline from 'node:readline/promises';

import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

export let users = [];

export function createRandomUser() {
  return {
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
  };
}

Array.from({ length: 1 }).forEach(() => {
  users.push(createRandomUser());
});

const userStrings = users.map((user) => {
  return `${user.name} ${user.surname}, ${user.email}, ${user.password}, ${user.birthdate.toISOString()}`;
});

// await fs.writeFile('people.txt', userStrings.join('\n') + '\n');



const login = await rl.question('login:');
const password = await rl.question('password:');


  if(login === 'admin' && password === '1234'){
    const choice = await rl.question('Įrašykite "A", jei norite failą papildyti, arba "R", jei norite peržiūrėti:')

    if(choice.toLocaleUpperCase() === 'A'){
        await fs.appendFile('people.txt', userStrings.join('\n') + '\n');
        console.log('Duomenys faile sėkmingai išsaugoti')
        rl.close()
    } else if (choice.toUpperCase() === 'R'){
        const data = await fs.readFile('people.txt', 'utf-8');
        console.log(data);
        rl.close();
    } else {
      console.log('Neteisinga pasirinkimo reikšmė')
      rl.close()
    }
    
  } else{
    console.log('Neteisingi prisijungimo duomenys')
    rl.close()
  }
