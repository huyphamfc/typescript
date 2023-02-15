class Account {
  nickname?: string;

  constructor(readonly id: number, public owner: string, private _balance: number) {}

  getBalance() {
    return this._balance;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error('Invalid amount.');
    this._balance += amount;
  }
}

export default Account;
