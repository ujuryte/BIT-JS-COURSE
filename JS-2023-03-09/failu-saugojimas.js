import fs from 'node:fs/promises';

// await fs.mkdir('Sukurtas');

// const projectFolder = new URL('../../test', import.meta.url);

// await fs.mkdir('test/pirmas', {recursive: true});

// console.log(import.meta.url);

// console.log(projectFolder)

// await fs.writeFile('hello.txt', 'Sveiki')

// \n - nauja eilute
// \t - tab


// await fs.appendFile('hello.txt', 'Lorem ipsum\n')

// tikrinimas ar failas arba direktorija egzistuoja
// try{
//     await fs.access('hello.txt')
//     console.log('failas egzistuoja')
// } catch {
//     console.log('failo nera')
// }

// direktorijos istrynimas
fs.rmdir('Sukurtas');