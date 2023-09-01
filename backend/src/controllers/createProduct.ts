import { Request, Response } from "express";
import { ICreateProduct } from "../types/Interface";
import { ProductDao } from '../models/DAO/ProductDao'
import { Product } from '../models/entity/Product.model'

async function createProduct(req: Request, res: Response) {
  const { id, user, nombre, cantidad, marca, precio }: ICreateProduct =
    req.body;

  const ProductDaoClass =  new ProductDao(Product)

  let dataStorage = await ProductDaoClass.createProduct({
    id,cantidad,marca, nombre,precio
  })
    res.json(dataStorage)

    console.log(req.body)
}

export {createProduct}