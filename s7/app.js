const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const fs = require('fs');
const mysql = require('mysql');
// const { v4: uuidv4 } = require('uuid');
// const md5 = require('md5');

const app = express();
const port = 3003;
// app.use(express.json({ limit: '10mb' }));
// app.use(express.static('public'));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
// app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'forest'
  })

  connection.connect();

// SELECT column1, column2, ...
// FROM table_name;

// <> nelygu sql'e

//WHERE height <> 3
// ORDER BY type, title
// LIMIT 3, 3 


app.get('/trees', (req, res) => {

    const sql = `
        SELECT id, height, type, title
        FROM trees
    `;
    
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
      })

    

});



app.listen(port, () => {
    console.log(`PARK is on port number: ${port}`);
});