import { Strategy } from "passport-local";
import { compare } from "bcrypt";
import UserDao from "../models/DAO/UserDao";
import { User } from "../models/entity/User.models";

const localStrategy = new Strategy(
  {
    usernameField: "email",
  },
  async function verify(email, password, done) {
    try {
      const userDao = new UserDao(User);
      const dataExtract = await userDao.selectWithVariable({ email });

      if (!dataExtract) {
        return done(null, false,{ message: "Incorrect email or password "});
      }

      const verifyPassword = await compare(password, dataExtract.dataValues.password);

      if (!verifyPassword) {
        return done(null, false,{ message: "Incorrect email or password "}); 
      }

      return done(null, {
        id: dataExtract.dataValues.id,
        username: dataExtract.dataValues.username
      })

    } catch (error) {
      done(error);
    }
  }
);

export { localStrategy }