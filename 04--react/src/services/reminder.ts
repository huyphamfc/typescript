import Reminder from '../models/reminder';

class ReminderService {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  async getReminders() {
    const res: Response = await fetch(`${this.baseUrl}/todos`);
    const data: Reminder[] = await res.json();
    return data;
  }

  async createReminder(title: string) {
    const res = await fetch(`${this.baseUrl}/todos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    const data: Reminder = await res.json();

    return data;
  }
}

export default new ReminderService();
