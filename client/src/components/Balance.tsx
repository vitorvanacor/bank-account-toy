interface BalanceProps {
  balance?: number;
}

export default function Balance({ balance }: BalanceProps) {
  return (
    <>
      <h2>Current Balance</h2>
      <h2 data-testid="balance" style={{ textAlign: "center" }}>
        {typeof balance === "number"
          ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(balance / 100)
          : "R$--,--"}
      </h2>
    </>
  );
}
