import { Request, Response } from "express";
import { compare } from "bcrypt";
import { type IDataUser } from "../types/Interface";
import UserDao from "../models/DAO/UserDao";
import { User } from "../models/entity/User.models";

async function validateUsers(req: Request, res: Response) {
  try {
    let { email, password }: IDataUser = req.body;
    const objDAO = new UserDao(User);
    const DataExtract = await objDAO.selectWithVariable({ email });
    console.log(email, password);
    if (!DataExtract) {
      throw new Error("404");
    }

    let verifyPassword = await compare(
      password,
      DataExtract.dataValues.password
    );

    if (!verifyPassword) {
      throw new Error("401");
    }

    req.session!.user = {

    }
  } catch (error) {}
}

export { validateUsers };
