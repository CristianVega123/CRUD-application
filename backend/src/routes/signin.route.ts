import { Router, Request, Response } from "express";
import { createUsersSignIn } from '../controllers/createUsers'
const router = Router();


router.get("/data", (req: Request, res: Response) => {

    if (req.user) {
       res.json(req.user) 
    } else {
        res.sendStatus(401)
    }
})
router.post("/signIn", createUsersSignIn )

export default router;
