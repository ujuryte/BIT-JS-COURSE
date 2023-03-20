import express from 'express';
import path from 'node:path';
import fs from 'node:fs/promises';
import { engine } from 'express-handlebars';

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({
    extended: true
}))

let data = {
        products: [
            {name: 'Skalbimo masina', price: '500 EUR'},
            {name: 'Televizorius', price: '1,000 EUR'},
            {name: 'Siurblys', price: '50 EUR'}
        ]
    }

app.get('/', (req,res) =>{
    
    res.render('home', data)
})

app.get('/checkout/:id', async (req,res) =>{
    try {
        const produktas = data[req.params.id];
        res.render('single-prod', {produktas})
    } catch {
        res.render('single-prod', {
            message: 'Atsiprasome, ivyko klaida'
        })
    }
})

app.post('/save-info', async (req,res) => {
    try {
        let database = await fs.readFile('./database.json', 'utf-8');
    
        database = JSON.parse(database);
    
        database.push(req.body);
    
        await fs.writeFile('./database.json', JSON.stringify(database));
    } catch {
        await fs.writeFile('./database.json', JSON.stringify([req.body]));
    }

    res.send(`Prekes bus pristatytos per 3 d.d.`)
})

app.listen(3000)