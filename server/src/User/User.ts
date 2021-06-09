import { model, Schema } from "mongoose";

const schema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 16,
    lowercase: true,
    trim: true,
  },
});

const UserModel = model<User>("User", schema);

class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  private model() {
    return new UserModel({ username: this.username });
  }
}
