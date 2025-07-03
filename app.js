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

app.listen(3000, () => {
  console.log('Server running on port 3000');
});