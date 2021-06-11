import Repository from "../lib/Repository";
import { Transaction } from "./Transaction";

export default class TransactionRepository extends Repository {
  static collectionName() {
    return "transactions";
  }

  static async insert(transaction: Transaction) {
    return await this.collection().insertOne(transaction);
  }

  static async find(query: object): Promise<Transaction> {
    // TODO: Validate that the found object is a Transaction
    return await this.collection().findOne(query);
  }

  static async getHistory(username: string): Promise<Transaction[]> {
    const cursor = this.collection()
      .find({
        $or: [{ source: username }, { destination: username }],
      })
      .sort({ createdAt: -1 });
    return await cursor.toArray();
  }
}
