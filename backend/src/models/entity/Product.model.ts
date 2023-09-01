import { Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize'
import { sequelize } from "../database/pool";

class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
    declare id: number | undefined; 
    declare nombre: string; 
    declare precio: number;
    declare cantidad: number;
    declare marca: string; 
} 

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: true
    }, 
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    cantidad : {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    marca: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, {
    modelName: "Products",
    sequelize, 
    timestamps: false
})

export { Product }