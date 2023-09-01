import { Product } from '../entity/Product.model'

class ProductDao {
    private InstaceModelProduct ?: typeof Product


    constructor(instanceModel ?: typeof Product)
    constructor(instanceModel: any){
        if(instanceModel !== undefined) {
            this.InstaceModelProduct = instanceModel
        }
    }
    

    public createProduct(data ) {
        
    }
}