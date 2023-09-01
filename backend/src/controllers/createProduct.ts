import { Request, Response } from "express";
import { ICreateProduct } from "../types/Interface";

async function createProduct(req: Request, res: Response) {
  const { id, user, nombre, cantidad, marca, precio }: ICreateProduct =
    req.body;


    console.log(req.body)
}
