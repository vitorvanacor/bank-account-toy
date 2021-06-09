//import {dbCliente} = "client"

interface DepositProps {
  username: string;
  amount: string;
}

enum TransactionType {
  Deposit = "DEPOSIT",
  Withdraw = "DOWN",
  Payment = "PAYMENT",
}

export default class Transaction {
  readonly type: TransactionType;
  readonly centsAmount: number;
  readonly source?: string;
  readonly destination?: string;
  readonly description?: string;
  readonly createdAt: Date;

  public static transactions: Array<Transaction> = [];

  public static makeDeposit(props: DepositProps) {
    return new Transaction(
      TransactionType.Deposit,
      parseInt(props.amount),
      undefined,
      props.username
    );
  }

  public async save() {}

  static fromObject(obj: {
    type: TransactionType;
    centsAmount: number;
    destination: string;
  }) {
    return new Transaction(obj["type"], obj["centsAmount"], "", destination);
  }

  // Explicar pq o construtor é privado
  private constructor(
    type: TransactionType,
    centsAmount: number,
    source?: string,
    destination?: string,
    description?: string,
    createdAt: Date = new Date()
  ) {
    this.type = type;
    this.centsAmount = centsAmount;
    this.source = source;
    this.destination = destination;
    this.description = description;
    this.createdAt = createdAt;
  }
}
