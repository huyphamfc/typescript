import express from 'express';

import remindersRouter from './routers/reminders';

const app = express();

app.use(express.json());

app.use('/api/reminders', remindersRouter);

app.get('/api', (req, res) => {
  res.end('Hello from the server!');
});

app.listen(8000, () => {
  console.log('Server running on port 8000.');
});
