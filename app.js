const express = require('express');
const { getUsers, getProducts } = require('./controller');
const app = express();

app.get('/users', getUsers);

app.get('/products', getProducts);

app.get('cities', (req, res) => {
  res.json([
    { id: 1, name: 'New York', population: 1000000 },
    { id: 2, name: 'London', population: 900000 },
    { id: 5, name: 'Sydney', population: 600000 },
    { id: 4, name: 'Tokyo', population: 800000 },
    { id: 3, name: 'Paris', population: 700000 }
  ]);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});