import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.end('Hello from the server!');
});

app.listen(8000, () => {
  console.log('Server running on port 8000.');
});
