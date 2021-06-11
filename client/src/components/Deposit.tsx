import { useState } from "react";

import CurrencyInput from "./CurrencyInput";
import { MovementRequest } from "../Transaction/Transaction";

export interface DepositProps {
  mutate: (req: MovementRequest) => void;
  username: string;
  disabled: boolean;
}

export default function Deposit({ mutate, disabled, username }: DepositProps) {
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const reset = () => setDepositAmount(0);

  return (
    <div>
      <label htmlFor="deposit">Deposit to account</label>
      <CurrencyInput
        id="deposit"
        value={depositAmount}
        onChange={(e) => {
          setDepositAmount(parseInt(e.currentTarget.value));
        }}
        disabled={disabled}
      />
      <button
        onClick={() => {
          mutate({ username: username, centsAmount: depositAmount });
          reset();
        }}
        disabled={disabled || depositAmount <= 0}
      >
        Deposit
      </button>
    </div>
  );
}
