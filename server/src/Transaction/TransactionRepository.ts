import * as db from "../lib/db";
import Transaction from "./Transaction";

export default class TransactionRepository {
  static collection() {
    return db.client.db().collection("transactions");
  }

  static async insert(transaction: Transaction) {
    return await this.collection().insertOne(transaction);
  }

  static async find(query: Object): Promise<Transaction> {
    return await this.collection().findOne(query);
  }
}
