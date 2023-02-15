import Account from './01--class';

const account = new Account(1, 'Huy', 999);
account.deposit(1);

console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
