import { Router } from 'express';

import CreateReminderDto from '../dtos/create-reminder';

const reminders = Router();

reminders.get('/', (req, res) => {
  res.end('List of reminders.');
});

reminders.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;
  res.end(title);
});

export default reminders;
