import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/pool";
class User extends Model {}

const ModelUser = User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
  },
  {
    modelName: "User",
    sequelize: sequelize,
  }
);
export { ModelUser, User };
