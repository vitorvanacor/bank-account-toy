import { InputHTMLAttributes } from "react";

function removeCurrencySymbols(currency: string) {
  const symbolsRegex = /R\$|\.|,/g; // Matches (R$|.|,)
  return currency.replaceAll(symbolsRegex, "");
}

export default function CurrencyInput(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  const { value, onChange, ...otherProps } = props;
  return (
    <input
      value={
        typeof value == "number"
          ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value / 100)
          : 0
      }
      onChange={(e) => {
        e.currentTarget.value = removeCurrencySymbols(e.currentTarget.value);
        return onChange ? onChange(e) : () => {};
      }}
      {...otherProps}
    />
  );
}
