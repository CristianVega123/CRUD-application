import { user } from "@nextui-org/react";
import { DataCreated, DataUpdate, SessionFrontend } from "../../types/Interface";
import { Product } from "../entity/Product.model";

class ProductDao {
  private InstaceModelProduct?: typeof Product;

  constructor(instanceModel?: typeof Product);
  constructor(instanceModel: any) {
    if (instanceModel !== undefined) {
      this.InstaceModelProduct = instanceModel;
    }
  }

  public async createProduct(data: DataCreated): Promise<Product | undefined> {
    let dataProductCreate;
    if (this.InstaceModelProduct) {
      dataProductCreate = await this.InstaceModelProduct.create({
        ...data,
        userId: Number(data.id),
      });
      return dataProductCreate;
    }
  }

  public async findAllWithParamenter(
    id: string | undefined
  ): Promise<Product[] | undefined> {
    let findAllParameter;
    if (this.InstaceModelProduct && id) {
      findAllParameter = await this.InstaceModelProduct.findAll({
        where: {
          userId: id,
        },
      });

      return findAllParameter;
    }
  }

  public async deleteWithParams(userProduct: number, userId: number) {
    if (userId && userProduct && this.InstaceModelProduct) {
       this.InstaceModelProduct.destroy({
        where: {
            id_product: userProduct,
            userId: userId
        }
       }) 
    }
  }

  public async updateWithParams(ObjUpdate: DataUpdate, whereObj: SessionFrontend) {
    let logicUpdate = Object.entries(ObjUpdate).map( ([clave, value]) => {
        if (Boolean(value)) {
            return {[clave]: value}
        } 
     }).filter( value =>  typeof value !== "undefined")

     console.log(logicUpdate)
     let objUpdate = {

     }

     for (const key of logicUpdate ) {
        console.log(key)
        objUpdate = {
            ...objUpdate, 
            ...key
        }
     }




     if (this.InstaceModelProduct && objUpdate) {
        console.log(objUpdate, whereObj)
        this.InstaceModelProduct.update(objUpdate, {
            where: {
                id_product: whereObj.idProduct,
                userId: whereObj.userId
            } 
        }) 
     }
  }
}
export { ProductDao };
