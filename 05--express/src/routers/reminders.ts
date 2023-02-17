import { Router } from 'express';

const reminders = Router();

reminders.get('/', (req, res) => {
  res.end('List of reminders.');
});

export default reminders;
