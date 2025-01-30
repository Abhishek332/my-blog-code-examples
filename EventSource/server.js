// server.js
const express = require('express');
const app = express();

// Simulate stock prices
let stockPrices = {
  'AAPL': 145.30,
  'GOOG': 2735.21,
  'AMZN': 3451.48,
};

app.get('/events', (req, res) => {
  // Set headers to tell the browser we're sending events
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.flushHeaders();  // Send headers immediately

  // Every 2 seconds, simulate a stock price update
  setInterval(() => {
    // Randomly update stock prices
    for (let symbol in stockPrices) {
      stockPrices[symbol] += (Math.random() - 0.5) * 5; // small random change
    }
    
    // Send updated stock prices to the client
    res.write(`data: ${JSON.stringify(stockPrices)}\n\n`);
  }, 2000); // Every 2 seconds
});

app.listen(3000, () => console.log('Server running on port 3000'));
