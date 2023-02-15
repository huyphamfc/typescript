function printName(name: string | undefined | null): void {
  if (name) {
    console.log(name.toUpperCase());
    return;
  }

  console.log('Noname');
}

printName('TypeScript');
printName(null);
