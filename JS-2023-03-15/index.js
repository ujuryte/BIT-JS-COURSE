import express from 'express';
import path from 'node:path';
import fs from 'node:fs/promises';

const app = express();

// kelio aprasymas (route)

app.get('/', (uzklausa, atsakymas) => {
    atsakymas.send('<h1>Serveris veikia!<h1>')
});

app.get('/titulinis', (uzklausa, atsakymas) => {
    atsakymas.sendFile(path.resolve('./templates/home.html'))
});

app.get('/kontaktai', (uzklausa, atsakymas) => {
    console.log(uzklausa.query)
    atsakymas.sendFile(path.resolve('./templates/contactus.html'))
    fs.appendFile('./database.json', JSON.stringify(uzklausa.query) + '\n')
});

app.listen(3000);