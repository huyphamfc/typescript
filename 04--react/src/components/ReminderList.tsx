import React from 'react';

import Reminder from '../models/reminder';
import ReminderItem from './ReminderItem';

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder(id: number): void;
}

function ReminderList(props: ReminderListProps) {
  const { items, onRemoveReminder } = props;

  const reminders = items.map((item) => (
    <ReminderItem key={item.id} reminder={item} removeReminder={onRemoveReminder} />
  ));

  return <ul>{reminders}</ul>;
}

export default ReminderList;
