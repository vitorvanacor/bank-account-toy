import { Request, Response } from "express";
import { User, UserRepository } from ".";

export async function postUser(req: Request, res: Response) {
  const { username } = req.body;
  const user: User = { username: username };
  await UserRepository.insert(user);
  return res.json(user);
}

export async function getUsers(req: Request, res: Response) {
  const users = await UserRepository.getUsers();
  return res.json({ users });
}
