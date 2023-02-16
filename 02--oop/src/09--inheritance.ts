// parent class
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  walk() {
    console.log('Walk');
  }
}

// child class
class Student extends Person {
  constructor(public idStudent: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  test() {
    console.log('Test');
  }
}
