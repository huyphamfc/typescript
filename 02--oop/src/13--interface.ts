interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class HuyCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent() {
    console.log('Add event.');
  }

  removeEvent(): void {
    console.log('Remove event.');
  }
}
