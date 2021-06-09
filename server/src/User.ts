export default class User {
  readonly id: number;
  username: string;

  public static users: Array<User> = [];

  constructor(username: string) {
    this.username = username;
    this.id = User.users.length;
    User.users.push(this);
  }
}
