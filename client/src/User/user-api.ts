import axios from "axios";
import { User } from "./User";

export async function getUsers(): Promise<User[]> {
  let res = await axios.get("/users");
  return res.data.users;
}

export async function getUser(username: string): Promise<User> {
  let res = await axios.get("/user", {
    params: { username: username },
  });
  return res.data;
}

export async function postUser(req: User) {
  const res: User = await axios.post("/users", req);
  return res;
}
