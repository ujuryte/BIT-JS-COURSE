import express from 'express';
import path from 'node:path';
import fs from 'node:fs/promises';
import { engine } from 'express-handlebars';

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//butina, norint gauti duomenis POST metodu:
app.use(express.urlencoded({
    extended: true
}))

app.get('/', async (req,res) => {
    // let data = await fs.readFile('./database.json', 'utf-8')
    // data = JSON.parse(data)

    // data = data.map(post => `
    //     <div>
    //         <img src='${post.photo}' alt='${post.title}'>
    //         <h3>${post.title}</h3>
    //         <p>${post.excerpt}</p>
    //     </div>
    // `)

    // let html = '<h1>Naujausi Irasai</h1>' + data.join('')
    // res.send(html)

    let data = await fs.readFile('./database.json', 'utf-8')
    data = JSON.parse(data)

    res.render('home', { posts: data });
});

app.get('/new-entry', (req,res) =>{
    res.render('new')
})

//norint priimti duomenis post metodu, kreipiames i .post() funkcija

app.post('/save-post', async (req,res) => {
    try {
        let database = await fs.readFile('./database.json', 'utf-8');
    
        database = JSON.parse(database);
    
        database.push(req.body);
    
        await fs.writeFile('./database.json', JSON.stringify(database));
    } catch {
        await fs.writeFile('./database.json', JSON.stringify([req.body]));
    }

    res.redirect('/')
})

app.listen(8000)