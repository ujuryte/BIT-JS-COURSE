import express from 'express';
import fs from 'node:fs/promises';
import { engine } from 'express-handlebars';
import session from 'express-session';
import { auth } from './middleware/auth.js'

const app = express();
const file = './database.json';

app.use(session({
  secret: 'labai slapta fraze',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



app.use(express.urlencoded({
    extended: true
}))

app.get('/login', (req,res) => {
    // console.log(req.session.loggedIn)
    res.render('login')
})

app.post('/login', async (req,res) => {
    let data = JSON.parse(await fs.readFile(file, 'utf-8'));
    data = data.filter(user => user.pastas === req.body.pastas && user.slaptazodis === req.body.slaptazodis)
    
    if(data.length > 0) {
        req.session.loggedIn = true;
        return res.redirect ('/');
    }
        
    
    res.redirect('/login')
})

app.get('/', auth, (req,res) => {
    res.render('admin')
})

app.post('/', auth,  async (req,res) => {
    // if(!req.session.loggedIn)
    //     return res.redirect('/login')

    try {
        let data = JSON.parse(await fs.readFile(file, 'utf-8'));
        data.push(req.body)
        await fs.writeFile(file, JSON.stringify(data));
    } catch {
        await fs.writeFile(file, JSON.stringify([req.body]));
    }

    res.redirect('/')
})

app.listen(3000)