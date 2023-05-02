const express = require('express');
const app = express();
const cors = require('cors');
const port = 3003;
const { v4: uuidv4 } = require('uuid');

const fs = require('fs')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/colors', (req, res) => {

  let data = fs.readFileSync('./Data/colors.json', 'utf8');

  const id = uuidv4();
  const color = { ...req.body.color, id };

  data = JSON.parse(data);

  data.push(color);

  data = JSON.stringify(data);

  fs.writeFileSync('./Data/colors.json', data);

  res.json({
    message: ['New color added', 'ok']
  });
});


// app.get('/clients', (req, res) => {

//   const data = fs.readFileSync('./Data/clients.json', 'utf8')

//   res.json({
//     clients: JSON.parse(data),
//     message: 'OK'
//   });
// });




// app.delete('/clients/:id', (req, res) => {

//   let data = fs.readFileSync('./Data/clients.json', 'utf8');

//   data = JSON.parse(data);

//   data = data.filter(c => c.id !== req.params.id);

//   data = JSON.stringify(data);

//   fs.writeFileSync('./Data/clients.json', data);

//   res.json({
//     message: 'ok'
//   });
// });

// app.put('/clients/:id', (req, res) => {

//   let data = fs.readFileSync('./Data/clients.json', 'utf8');

//   data = JSON.parse(data);

//   data = data.map(c => c.id === req.params.id ? {...c, ...req.body.client, id: req.params.id} : {...c})

//   data = JSON.stringify(data);

//   fs.writeFileSync('./Data/clients.json', data);

//   res.json({
//     message: 'ok',
//     promiseID: req.body.promiseID,
//   });
// });





app.listen(port, () => {
  console.log(`S3 server on port ${port}`)
});