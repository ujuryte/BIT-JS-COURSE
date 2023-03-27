import express from 'express';
import fs from 'node:fs/promises';
import { engine } from 'express-handlebars';
import session from 'express-session';
import { auth } from './middleware/auth.js';
import multer from 'multer';

const app = express();
// const file = './database.json';
const uploadsDir = './uploads';
const storage = multer.diskStorage({
    destination: async (req, file, next) => {
        try{
            await fs.access(uploadsDir)
        } catch {
            await fs.mkdir(uploadsDir);
        }

        next(null, uploadsDir)
    },
    filename: (req, file, next) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const nameParts = file.originalname.split('.');
        next(null, uniqueSuffix + '.'+ nameParts[nameParts.length - 1]);
    }
});
const upload = multer({ 
    storage,
    fileFilter: (req, file, next) => {
        const allowed = [
            'image/gif',
            'image/jpeg',
            'image/svg+xml',
            'image/webp',
            'image/png'
        ];
    
        if (allowed.includes(file.mimetype))
            next(null, true);
    }
})

// app.set('trust proxy', 1);

//Sesijos duomenų konfigūracija
app.use(session({
  secret: 'LABAI SLAPTA FRAZĖ',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use((req, res, next) => {
    res.locals.loggedIn = req.session.loggedIn;
    next();
  });

//Konfigūracinė eilutė kuri yra būtina norint POST metodu priimti duomenis
app.use(express.urlencoded({
    extended: true
}));

//handlebars konfigūracija
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/uploads', express.static('./uploads'))

app.get('/', (req,res) => {
    res.render('home')
})



app.get('/login', (req,res) => {
    res.render('login', {loggedIn: req.session.loggedIn});
})

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    
  if (email === 'admin@bit.lt' && password === '1234') {
    req.session.loggedIn = true;
    res.redirect('admin');
  } else {
    res.render('login', { error: 'Neteisingi prisijungimo duomenys.' });
  }

  delete req.session.error
    
});

app.get('/admin', auth, async (req,res) => {
    res.render('admin')
})

app.get('/logout', (req, res) => {
    req.session.loggedIn = false;
    res.redirect('/');
  });





app.listen(3000)
