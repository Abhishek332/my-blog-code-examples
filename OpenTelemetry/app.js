require('./tracing'); // Initialize tracing

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, OpenTelemetry!');
});

app.get('/products', (req, res) => {
    res.send('products fetching');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});