const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const fs = require('fs');
const mysql = require('mysql');
// const { v4: uuidv4 } = require('uuid');
// const md5 = require('md5');

const app = express();
const port = 3003;
app.use(express.json({limit: '10mb'}));
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


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'images'
})

connection.connect();



app.get('/images', (_, res) => {

    const sql = `
        SELECT *
        FROM photos
    `;

    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
    })


});




app.post('/images', (req, res) => {

    const sql = `
        INSERT INTO photos (title, file)
        VALUES (?, ?)
    `;

    connection.query(sql, [req.body.title, req.body.file ? req.body.file : null], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type:'ok',
                title: 'Images',
                text: 'New image was added!'

            }
        });
    })


});

// DELETE FROM table_name WHERE condition;

app.delete('/images/:id', (req, res) => {

    const sql = `
        DELETE FROM photos
        WHERE id = ?
    `;

    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type:'error',
                title: 'Photos',
                text: 'The photo was deleted!'

            }
        });
    })


});

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/images/:id', (req, res) => {

    const sql = `
        UPDATE photos
        SET title = ?, file = ?
        WHERE id = ?
    `;

    connection.query(sql, [req.body.title, req.body.file ? req.body.file : null, req.params.id], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type:'info',
                title: 'Photos',
                text: 'The photo was updated!'

            }
        });
    })


});




app.listen(port, () => {
    console.log(`GALLERY is on port number: ${port}`);
});