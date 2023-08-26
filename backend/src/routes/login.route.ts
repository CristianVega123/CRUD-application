import { Router, Request, Response } from "express";
import { createUsersSignIn } from '../controllers/createUsers'
const router = Router();


router.get("/data", (req: Request, res: Response) => {
    res.send("login")
})


router.post("/signIn", createUsersSignIn )

export default router;
