import React, { useState, useEffect } from 'react';

import Reminder from './models/reminder';
import ReminderForm from './components/ReminderForm';
import ReminderList from './components/ReminderList';
import reminderService from './services/reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.createReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  const removeReminder = (id: number) => {
    const newReminders = reminders.filter((item) => item.id !== id);
    setReminders(newReminders);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <>
      <ReminderForm onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </>
  );
}

export default App;
