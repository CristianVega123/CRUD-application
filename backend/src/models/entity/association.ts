import { User } from '../entity/User.models'
import { Product } from '../entity/Product.model'


// Uno a mucho ----> Usuario va a tener muchos productos creados

User.hasMany(Product)

Product.belongsTo(User)