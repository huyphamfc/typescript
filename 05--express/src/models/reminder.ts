export default class Reminder {
  id: number;
  completed: boolean;

  constructor(public title: string) {
    this.id = Date.now();
    this.completed = false;
  }
}
