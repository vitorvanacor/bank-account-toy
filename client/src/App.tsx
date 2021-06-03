import { useState } from "react";

function App() {
  const [currentBalance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);

  return (
    <>
      <h1>Bank Account</h1>

      <h2>Current Balance</h2>
      <h2 style={{ textAlign: "center" }}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(currentBalance)}
      </h2>
      <hr />

      <label htmlFor="deposit">Deposit to account</label>
      <input
        id="deposit"
        value={depositAmount}
        onChange={(e) => setDepositAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setBalance(currentBalance + depositAmount)}>
        Deposit
      </button>
      <hr />
    </>
  );
}

export default App;
