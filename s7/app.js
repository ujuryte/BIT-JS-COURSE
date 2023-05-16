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

// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);


app.post('/trees', (req, res) => {

    const sql = `
        INSERT INTO trees (title, height, type)
        VALUES (?, ?, ?)
    `;
    
    connection.query(sql, [req.body.title, req.body.height, req.body.type], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
      })
   

});

// DELETE FROM table_name WHERE condition;

app.delete('/trees/:id', (req, res) => {

    const sql = `
        DELETE FROM trees 
        WHERE id = ?
    `;
    
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
      })
   

});

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/trees/:id', (req, res) => {

    const sql = `
        UPDATE trees
        SET title = ?, height = ?, type = ?
        WHERE id = ?
    `;
    
    connection.query(sql, [req.body.title, req.body.height, req.body.type, req.params.id], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
      })
   

});

// TYPES

app.get('/types', (req, res) => {

    const sql = `
        SELECT id, title
        FROM types
    `;
    
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
      })
   

});

// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);


app.post('/types', (req, res) => {

    const sql = `
        INSERT INTO types (title)
        VALUES (?)
    `;
    
    connection.query(sql, [req.body.title], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
      })
   

});

// DELETE FROM table_name WHERE condition;

app.delete('/types/:id', (req, res) => {

    const sql = `
        DELETE FROM types 
        WHERE id = ?
    `;
    
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
      })
   

});

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/types/:id', (req, res) => {

    const sql = `
        UPDATE types
        SET title = ?
        WHERE id = ?
    `;
    
    connection.query(sql, [req.body.title, req.params.id], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
      })
   

});


app.listen(port, () => {
    console.log(`PARK is on port number: ${port}`);
});