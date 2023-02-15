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

  get balance() {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error('Invalid value.');
    this._balance = value;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error('Invalid amount.');
    this._balance += amount;
  }
}

export default Account;
