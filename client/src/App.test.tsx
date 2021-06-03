import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import App from "./App";

test("starting current balance is zero", () => {
  render(<App />);
  expect(screen.getByTestId("balance")).toHaveTextContent("R$0.00");
});

test("deposit adds to balance", () => {
  render(<App />);
  const input = screen.getByLabelText(/deposit/i);
  user.type(input, "10");
  user.click(screen.getByText("Deposit"));
  expect(screen.getByTestId("balance")).toHaveTextContent("R$10.00");
});

test("the app is accessible", async () => {
  const { container } = render(<App />);
  expect(await axe(container)).toHaveNoViolations();
});
