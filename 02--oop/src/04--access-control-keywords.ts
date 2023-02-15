class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error('Invalid amount.');
    this._balance += amount;
  }
}

export default Account;
