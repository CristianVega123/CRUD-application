import { Router, Request, Response } from "express";

const router = Router();


router.get("/data", (req: Request, res: Response) => {
    res.send("login")
})

export default router;
