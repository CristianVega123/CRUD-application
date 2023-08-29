import { Request, Response, NextFunction } from "express";
import UserDao from "../models/DAO/UserDao";
import { User } from "../models/entity/User.models";
import { IDataUser, InfoCreateUser } from "../types/Interface";
import { isResponseCreated } from '../types/predicateTypes'
import { hash, genSalt } from 'bcrypt'
import { config } from 'dotenv'
config()

async function createUsersSignIn(req: Request, res: Response, next: NextFunction) {
  const ModelUserDao = new UserDao(User);
  let { username, email, password }: IDataUser = req.body;
  
  const saltRound = Number(process.env.HASH_SALTROUND) || 8;
  let saltGenerate = await genSalt(saltRound);
  let passwordHash = await hash(password, saltGenerate)

  
  let responseDao: InfoCreateUser =  await ModelUserDao.createData({
    username,
    email, 
    password: passwordHash
  })
  console.log(responseDao)
  if (isResponseCreated(responseDao)) {
    if (req.session && responseDao.user?.id) {
      req.session.user = {
        id: responseDao.user.id,
        username: responseDao.user?.username
      } 
      console.log(req.session)
    }
    res.sendStatus(201)
  } else {
    res.json(responseDao)
  }


}

export { createUsersSignIn };
