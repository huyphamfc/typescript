function echo<T extends number | string>(value: T) {
  console.log(value);
}

// Interface
interface Person {
  name: string;
}

function echo<T extends Person>(value: T) {
  console.log(value);
}

// Class
class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends Person>(value: T) {
  console.log(value);
}

echo(new Customer('TS'));
