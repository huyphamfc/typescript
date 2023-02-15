type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | undefined | null {
  return id === 0 ? null : { birthday: new Date() };
}

const customer1 = getCustomer(0);
const customer2 = getCustomer(1);

console.log(customer1?.birthday, customer2?.birthday?.getFullYear());
