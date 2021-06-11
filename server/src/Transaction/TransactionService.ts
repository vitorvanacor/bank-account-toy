import {
  TransactionRepository,
  calculateBalance,
  makeWithdrawal,
  InsufficientFundsError,
} from ".";

export async function withdraw(username: string, centsAmount: number) {
  const withdrawal = makeWithdrawal(username, centsAmount);
  // TODO: Check balance & insert withdrawal as an ACID transaction
  const transactions = await TransactionRepository.getHistory(username);
  const balance = calculateBalance(transactions);
  if (balance < centsAmount) {
    throw new InsufficientFundsError(username, balance, centsAmount);
  }
  await TransactionRepository.insert(withdrawal);
  return withdrawal;
}
