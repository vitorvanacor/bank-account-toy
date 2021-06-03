import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);

  return (
    <>
      <h1>Bank Account</h1>

      <h2>Current Balance</h2>
      <h2 data-testid="balance" style={{ textAlign: "center" }}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(balance)}
      </h2>
      <hr />

      <label htmlFor="deposit">Deposit to account</label>
      <input
        id="deposit"
        value={depositAmount}
        onChange={(e) => setDepositAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setBalance(balance + depositAmount)}>
        Deposit
      </button>
      <hr />
    </>
  );
}

export default App;
