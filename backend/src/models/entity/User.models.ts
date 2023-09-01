import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import { sequelize } from "../database/pool";
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: number | undefined;
  declare username: string;
  declare email: string;
  declare password: string;

}

const ModelUser = User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      // allowNull: false
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false 
    }, 
    email : {
      type: DataTypes.STRING(58),
      unique: true,
      validate: {
        isEmail: true
      }
      
    },
    password: {
      type: DataTypes.STRING(80)
    }
  },
  {
    modelName: "User",
    sequelize: sequelize,
    timestamps: false
  }
);
export { ModelUser, User };
