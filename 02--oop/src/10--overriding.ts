class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  walk() {
    console.log('Walk');
  }
}

class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName;
  }
}
