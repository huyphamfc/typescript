abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }
  override render() {
    console.log('Render a circle.');
  }
}
