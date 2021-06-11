import * as db from "../lib/db";

export default abstract class Repository {
  static collectionName(): string {
    return "";
  }

  static async reset() {
    this.collection().drop();
  }

  static collection() {
    if (!db.client.isConnected()) {
      throw "Accessing db with disconnected client";
    }
    return db.client.db().collection(this.collectionName());
  }
}
