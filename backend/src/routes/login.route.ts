import { Router } from "express";
import { validateUsers } from '../controllers/validateUsers'


const router = Router();

router.post("/login", validateUsers);

export default router;
