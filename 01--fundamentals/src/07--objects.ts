// Type Alias
type Person = {
  readonly id: number;
  name: string;
  greeting: () => void;
};

const person: Person = {
  id: 1,
  name: 'TypeScript',
  greeting() {
    console.log(`Hello, I'm ${this.name}!`);
  },
};

person.greeting();
