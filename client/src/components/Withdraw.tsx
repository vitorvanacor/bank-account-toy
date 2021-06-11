import { useState } from "react";
import { MovementRequest } from "../Transaction/Transaction";

import CurrencyInput from "./CurrencyInput";

export interface WithdrawProps {
  mutate: (req: MovementRequest) => void;
  username: string;
  disabled: boolean;
}

export default function Withdraw({
  mutate,
  disabled,
  username,
}: WithdrawProps) {
  const [withdrawAmount, setWithdrawAmount] = useState<number>(0);
  const reset = () => setWithdrawAmount(0);

  return (
    <div>
      <label htmlFor="withdraw">Withdraw from account</label>
      <CurrencyInput
        id="withdraw"
        value={withdrawAmount}
        onChange={(e) => {
          setWithdrawAmount(parseInt(e.currentTarget.value));
        }}
        disabled={disabled}
      />
      <button
        onClick={() => {
          mutate({ username: username, centsAmount: withdrawAmount });
          reset();
        }}
        disabled={disabled || withdrawAmount <= 0}
      >
        Withdraw
      </button>
    </div>
  );
}
