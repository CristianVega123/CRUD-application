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
  if (isResponseCreated(responseDao)) {
    if (responseDao.user) {
      let user = {
        id: responseDao.user.id,
        username: responseDao.user?.username
      } 
      console.log(user)

      req.logIn(user, function(err) {
        if (err) {
          next(err) 
        }

        return res.sendStatus(201)
      })
  } else {
    return res.json(responseDao)
  }


}}

export { createUsersSignIn };
