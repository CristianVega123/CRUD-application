import { Request, Response } from "express";
import UserDao from "../models/DAO/UserDao";
import { ModelUser, User } from "../models/entity/User.models";

async function createUsersSignIn(req: Request, res: Response) {
  const InstanceUserModel = ModelUser;
  const ModelUserDao = new UserDao(InstanceUserModel);

  let { id } = req.body;
  console.log(id)
  res.sendStatus(201)
}

export { createUsersSignIn };
