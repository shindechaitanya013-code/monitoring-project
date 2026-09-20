const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = 3000;

// Collect default metrics (CPU, memory, etc.)
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// Custom counter metric
const requestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests'
});

app.get('/', (req, res) => {
  requestCounter.inc();
  res.send('Hello! This app is being monitored 📊');
});

// Metrics endpoint for Prometheus to scrape
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});