import React from 'react';

import Reminder from '../models/reminder';

interface ReminderItemProps {
  reminder: Reminder;
  removeReminder(id: number): void;
}

function ReminderItem(props: ReminderItemProps) {
  const { reminder, removeReminder } = props;

  const handleClick = () => {
    removeReminder(reminder.id);
  };

  return (
    <li>
      {reminder.title} <button onClick={handleClick}>Delete</button>
    </li>
  );
}

export default ReminderItem;
