import Repository from "../lib/Repository";
import { User } from "./User";

export default class UserRepository extends Repository {
  static collectionName() {
    return "users";
  }

  static async setup() {
    return this.collection().createIndex({ username: 1 }, { unique: true });
  }

  static async insert(user: User) {
    return await this.collection().insertOne(user);
  }

  static async find(query: object): Promise<User> {
    return await this.collection().findOne(query);
  }

  static async getUsers(): Promise<User[]> {
    return await this.collection().find().toArray();
  }
}
