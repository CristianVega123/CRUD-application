import { Router, Request, Response, NextFunction } from "express";

const router = Router()


router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
    req.logout(function(err) {
        if (err) {
           return next(err)
        }
        console.log("se elimino la session");
            
        return res.sendStatus(200)
    })
})


export default router