import { Request, Response } from "express";
import { ProductDao } from "../models/DAO/ProductDao";
import { Product } from "../models/entity/Product.model";

async function findAllController(req: Request, res: Response) {
  const { userId } = req.body;

  console.log(userId);
  
  const classDao = new ProductDao(Product)

  const dataFindAll = await classDao.findAllWithParamenter(userId)
    if (!(typeof dataFindAll === "undefined")) {
        console.log(dataFindAll)
        res.json(dataFindAll)
        
    }
}
 
export { findAllController }