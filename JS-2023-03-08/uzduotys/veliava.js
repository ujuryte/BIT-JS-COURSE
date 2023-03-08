import chalk from 'chalk';

let rezultatas= '';

for (let i =0; i<process.stdout.columns;i++){
    rezultatas +='*'
}
const juosta = (process.stdout.rows / 3)

for(let i = 0; i<juosta;i++){
    console.log(chalk.bgYellow(rezultatas))
}

for(let i = 0; i<juosta;i++){
    console.log(chalk.bgGreen(rezultatas))
}

for(let i = 0; i<juosta;i++){
    console.log(chalk.bgRed(rezultatas))
}




