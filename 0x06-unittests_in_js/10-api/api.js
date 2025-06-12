const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Index route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with numeric ID validation
app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

// New GET endpoint for available payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New POST endpoint for login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
