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
            showMessage: {
                type:'ok',
                title: 'Trees',
                text: 'New tree was planted!'

            }
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
            showMessage: {
                type:'error',
                title: 'Trees',
                text: 'The tree was cut!'

            }
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
            showMessage: {
                type:'info',
                title: 'Trees',
                text: 'The tree was updated!'

            }
        });
    })


});

// TYPES

app.get('/types', (req, res) => {

    const sql = `
        SELECT t.id, t.title, p.id AS park, p.title AS parkTitle
        FROM types as t
        INNER JOIN parks as p
        ON t.park = p.id
        ORDER BY p.title, t.title
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
        INSERT INTO types (title, park)
        VALUES (?, ?)
    `;

    connection.query(sql, [req.body.title, req.body.park], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type:'ok',
                title: 'Types',
                text: 'New type was created!'

            }
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
            showMessage: {
                type:'error',
                title: 'Types',
                text: 'The type was deleted!'

            }
        });
    })


});

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/types/:id', (req, res) => {

    const sql = `
        UPDATE types
        SET title = ?, park = ?
        WHERE id = ?
    `;

    connection.query(sql, [req.body.title, req.body.park, req.params.id], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type:'info',
                title: 'Types',
                text: 'The type was updated!'

            }
        });
    })


});


app.get('/types-count', (req, res) => {

    const sql = `
        SELECT COUNT(type) AS count, type
        FROM trees
        GROUP BY type
    `;

    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
      })

});


// PARKS

// SELECT column_name(s)
// FROM table1
// INNER JOIN table2
// ON table1.column_name = table2.column_name;

app.get('/parks', (req, res) => {

    const sql = `
        SELECT parks.id, parks.title, types.title AS typeTitle
        FROM parks
        LEFT JOIN types
        ON types.park = parks.id
    `;

    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
    })
});

app.post('/parks', (req, res) => {

    const sql = `
        INSERT INTO parks (title)
        VALUES (?)
    `;

    connection.query(sql, [req.body.title], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type:'ok',
                title: 'Parks',
                text: 'New park was created!'

            }
        });
    })


});


app.delete('/parks/:id', (req, res) => {

    const sql = `
        DELETE FROM parks 
        WHERE id = ?
    `;

    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type:'error',
                title: 'Parks',
                text: 'The park was deleted!'

            }
        });
    })


});


app.put('/parks/:id', (req, res) => {

    const sql = `
        UPDATE parks
        SET title = ?
        WHERE id = ?
    `;

    connection.query(sql, [req.body.title, req.params.id], (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type:'info',
                title: 'Parks',
                text: 'The park was updated!'

            }
        });
    })


});


app.listen(port, () => {
    console.log(`PARK is on port number: ${port}`);
});