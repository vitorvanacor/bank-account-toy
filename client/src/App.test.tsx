import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders current balance", () => {
  render(<App />);
  const balanceElement = screen.getByText(/current balance/i);
  expect(balanceElement).toBeInTheDocument();
});
