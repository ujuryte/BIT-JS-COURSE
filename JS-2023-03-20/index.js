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

app.get('/', (req,res) =>{
    const data = {
        products: [
            {name: 'Skalbimo masina', price: '500 EUR'},
            {name: 'Televizorius', price: '1,000 EUR'},
            {name: 'Siurblys', price: '50 EUR'}
        ]
    }
    res.render('home', data)
})



app.listen(3000)