import { Transaction } from "../Transaction/Transaction";

export interface TransactionListProps {
  transactions?: Transaction[];
}

function ColoredSign(props: { sign: boolean }) {
  return props.sign ? (
    <strong style={{ color: "green" }}>+</strong>
  ) : (
    <strong style={{ color: "red" }}>-</strong>
  );
}

function TransactionItem({ transaction }: { transaction: Transaction }) {
  return (
    <li>
      <h3>
        <ColoredSign sign={transaction.kind === "DEPOSIT"} />
        {transaction.kind}
        {transaction.kind === "PAYMENT"
          ? ` to ${transaction.destination.toLocaleUpperCase()}`
          : ""}
      </h3>
      <h4>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(transaction.centsAmount / 100)}
      </h4>
      {transaction.kind === "PAYMENT" ? transaction.description : ""}
    </li>
  );
}

export default function TransactionList({
  transactions,
}: TransactionListProps) {
  return (
    <>
      {transactions && transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction, index) => (
            <TransactionItem key={index} transaction={transaction} />
          ))}
        </ul>
      ) : (
        <p>There are no transactions to show</p>
      )}
    </>
  );
}
