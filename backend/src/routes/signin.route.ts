import { Router, Request, Response } from "express";
import { createUsersSignIn } from '../controllers/createUsers'
const router = Router();


router.get("/data", (req: Request, res: Response) => {
    console.log(req.session!.user)
    res.send(200)
})
router.post("/signIn", createUsersSignIn )

export default router;
