const express = require('express');
const app = express();

// Index route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route with numeric-only ID validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Start server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
