const express = require('express');
const app = express();
const cors = require('cors');
const port = 3003;
const { v4: uuidv4 } = require('uuid');

const fs = require('fs')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// app.get('/', (req, res) => {
//   res.send(`<h1>${req.query.hello}, ${req.query.who}!</h1>`)
// });

// app.get('/animal/:a', (req, res) => {
//     res.send(`<h1>Hello, ${req.params.a}!</h1>`)
//   });

//   app.get('/animals/:a', (req, res) => {
//     res.json({text: req.params.a})
//   });

app.get('/clients', (req, res) => {

  const data = fs.readFileSync('./Data/clients.json', 'utf8')

  res.json({
    clients: JSON.parse(data),
    message: 'OK'
  });
});

app.post('/clients', (req, res) => {

  let data = fs.readFileSync('./Data/clients.json', 'utf8');

  const id = uuidv4();
  const client = { ...req.body.client, id };

  data = JSON.parse(data);

  data.push(client);

  data = JSON.stringify(data);

  fs.writeFileSync('./Data/clients.json', data);

  res.json({
    message: ['New Client was Created', 'ok']
  });
});


app.delete('/clients/:id', (req, res) => {

  let data = fs.readFileSync('./Data/clients.json', 'utf8');

  data = JSON.parse(data);

  data = data.filter(c => c.id !== req.params.id);

  data = JSON.stringify(data);

  fs.writeFileSync('./Data/clients.json', data);

  res.json({
    message: ['Client was deleted', 'info']
  });
});

app.put('/clients/:id', (req, res) => {

  let data = fs.readFileSync('./Data/clients.json', 'utf8');

  data = JSON.parse(data);

  data = data.map(c => c.id === req.params.id ? {...c, ...req.body.client, id: req.params.id} : {...c})

  data = JSON.stringify(data);

  fs.writeFileSync('./Data/clients.json', data);

  res.json({
    message: ['Client was updated', 'ok']
  });
});





app.listen(port, () => {
  console.log(`S3 server on port ${port}`)
});