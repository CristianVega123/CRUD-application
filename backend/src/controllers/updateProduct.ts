import { Request, Response } from "express";
import { ProductDao } from "../models/DAO/ProductDao";
import { Product } from "../models/entity/Product.model";
import { RequestUpdate } from '../types/Interface'

async function updateProduct(req: Request, res: Response) {
  const { userId, idProduct, cantidad, marca, nombre, precio }: RequestUpdate = req.body;

  console.log(req.body);
  
  const classDao = new ProductDao(Product)
  classDao.updateWithParams({
    cantidad: Number(cantidad),
    marca,
    nombre,
    precio: Number(precio)
  }, {
    userId,
    idProduct
  })

  res.sendStatus(200)
}
 
export { updateProduct }