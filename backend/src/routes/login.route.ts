import { Router, Request, Response } from "express";
import passport from "passport";
import { localStrategy } from "../passport/Strategy";
import { User } from "../models/entity/User.models";

const router = Router();

passport.use(localStrategy);

passport.serializeUser(function (user, done) {
  // console.log(user)
  process.nextTick(function () {
    done(null, user);
  });
});

passport.deserializeUser(function (user: User, done) {
  console.log(user);
  process.nextTick(function () {
    done(null, user);
  });
});


router.post("/login", passport.authenticate("local", {failureMessage: false}), (req: Request, res: Response) => {
    res.sendStatus(200)
})

export default router;
