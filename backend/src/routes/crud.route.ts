import { Router } from "express";
import { createProduct } from "../controllers/createProduct";
import { findAllController } from "../controllers/findAllProduct";
import { deleteWithParams } from "../controllers/deleteProductOne";
import { updateProduct } from '../controllers/updateProduct'

const router = Router();

router.post("/createProduct", createProduct);
router.post("/findWithParams", findAllController);
router.post("/deleteWithParams", deleteWithParams);
router.post("/updateProduct", updateProduct)

export default router;
