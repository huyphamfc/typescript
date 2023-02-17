import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ReminderFormProps {
  onAddReminder(title: string): void;
}

function ReminderForm({ onAddReminder }: ReminderFormProps) {
  const [title, setTitle] = useState<string>('');

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title) return;

    onAddReminder(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleChangeTitle} />
      <button>Add Reminder</button>
    </form>
  );
}

export default ReminderForm;
