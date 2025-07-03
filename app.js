const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' }
  ]);
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 },
    { id: 3, name: 'Tablet', price: 399 },
    { id: 4, name: 'Monitor', price: 699 },
    { id: 5, name: 'Keyboard', price: 99 }
  ]);
});

app.get('/foods', (req, res) => {
  res.json([
    { id: 1, name: 'Pizza', calories: 500 },
    { id: 2, name: 'Burger', calories: 600 },
    { id: 3, name: 'Sushi', calories: 700 },
    { id: 4, name: 'Pasta', calories: 400 },
    { id: 5, name: 'Salad', calories: 300 }
  ]);
});

app.get('cities', (req, res) => {
  res.json([
    { id: 1, name: 'New York', population: 1000000 },
    { id: 2, name: 'London', population: 900000 },
    { id: 3, name: 'Tokyo', population: 800000 },
    { id: 4, name: 'Paris', population: 700000 },
    { id: 5, name: 'Sydney', population: 600000 }
  ]);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});