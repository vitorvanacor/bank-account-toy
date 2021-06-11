import { useQuery, QueryKey } from "react-query";

import {
  getHistory,
  useWithdraw,
  useDeposit,
  usePayment,
} from "./Transaction/transaction-api";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import TransactionList from "./components/TransactionList";
import { TransactionHistory } from "./Transaction/Transaction";
import Balance from "./components/Balance";
import Payment from "./components/Payment";

const placeholder: TransactionHistory = {
  username: "",
  balance: 0,
  transactions: [],
};

export interface HomeProps {
  username: string;
  logout: () => void;
}

export default function Home({ username, logout }: HomeProps) {
  const queryKey: QueryKey = ["transactions", username];
  const { data: history } = useQuery<TransactionHistory, Error>(
    queryKey,
    () => getHistory(username),
    { placeholderData: placeholder }
  );

  const depositMutation = useDeposit(queryKey);
  const withdrawMutation = useWithdraw(queryKey);
  const paymentMutation = usePayment(queryKey);

  return (
    <>
      <h1>{username.toLocaleUpperCase()}'s Account</h1>

      <Balance balance={history?.balance} />
      <hr />
      <div className="flex">
        <Deposit
          mutate={depositMutation.mutate}
          username={username}
          disabled={depositMutation.isLoading}
        />
        <Withdraw
          mutate={withdrawMutation.mutate}
          username={username}
          disabled={withdrawMutation.isLoading}
        />
      </div>
      <hr />
      <Payment
        mutate={paymentMutation.mutate}
        username={username}
        disabled={paymentMutation.isLoading}
      />
      <hr />
      <TransactionList transactions={history ? history.transactions : []} />
      <div
        style={{
          position: "absolute",
          left: "15px",
          top: "10px",
          cursor: "pointer",
        }}
        onClick={() => logout()}
      >
        Change User
      </div>
    </>
  );
}
