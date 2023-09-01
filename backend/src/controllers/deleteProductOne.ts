import { Request, Response} from 'express'
import { ProductDao } from '../models/DAO/ProductDao'
import { Product } from '../models/entity/Product.model'


async function deleteWithParams(req: Request, res: Response) {
   const {userid, idProduct} = req.body 

    const ClassDao = new ProductDao(Product);

    ClassDao.deleteWithParams(idProduct, userid)

}


export { deleteWithParams }