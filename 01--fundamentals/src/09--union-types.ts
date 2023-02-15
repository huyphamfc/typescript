function convertKgToLb(weight: number | string): number {
  // narrowing
  if (typeof weight === 'number') return weight * 2.2;
  return parseInt(weight) * 2.2;
}

const weight1 = convertKgToLb(10);
const weight2 = convertKgToLb('10kg');

console.log(weight1, weight2);
