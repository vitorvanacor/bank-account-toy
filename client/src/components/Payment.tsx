import { useState } from "react";
import { PaymentRequest } from "../Transaction/Transaction";

import CurrencyInput from "./CurrencyInput";

export interface PaymentProps {
  mutate: (req: PaymentRequest) => void;
  username: string;
  disabled: boolean;
}

export default function Payment({ mutate, disabled, username }: PaymentProps) {
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [paymentReceiver, setPaymentReceiver] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const reset = () => {
    setPaymentAmount(0);
    setPaymentReceiver("");
    setDescription("");
  };

  return (
    <>
      <label htmlFor="payment">Make a payment</label>
      <CurrencyInput
        id="payment"
        value={paymentAmount}
        onChange={(e) => {
          setPaymentAmount(parseInt(e.currentTarget.value));
        }}
        disabled={disabled}
      />
      <div className="flex">
        <label htmlFor="payment-receiver">
          Receiver
          <input
            id="payment-receiver"
            value={paymentReceiver}
            onChange={(e) => {
              setPaymentReceiver(e.currentTarget.value);
            }}
            disabled={disabled}
          />
        </label>
        <label htmlFor="description">
          Description (Optional)
          <input
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
            disabled={disabled}
          />
        </label>
      </div>
      <button
        onClick={() => {
          mutate({
            username: username,
            centsAmount: paymentAmount,
            destination: paymentReceiver,
            description: description,
          });
          reset();
        }}
        disabled={disabled || paymentAmount <= 0 || paymentReceiver.length <= 0}
      >
        Pay
      </button>
    </>
  );
}
