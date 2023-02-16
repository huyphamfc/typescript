class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student extends Person {
  constructor(firstName: string, lastName: string, public idStudent: number) {
    super(firstName, lastName);
  }
}

class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName;
  }
}

const printName = (people: Person[]) => {
  for (const person of people) console.log(person.fullName);
};

printName([new Student('John', 'Smith', 1), new Teacher('Huy', 'Pham')]);
// John Smith
// Professor Huy Pham
