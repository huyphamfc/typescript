import { Router } from 'express';

import CreateReminderDto from '../dtos/create-reminder';
import Reminder from '../models/reminder';

const reminders: Reminder[] = [];

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json(reminders);
});

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;

  const newReminder = new Reminder(title);
  reminders.push(newReminder);

  res.status(201).json(newReminder);
});

export default router;
