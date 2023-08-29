import { IDataUser, IResponseCreated, ObjError } from "../../types/Interface";
import { User } from "../entity/User.models";
import { UniqueConstraintError } from "sequelize";

class UserDao {
  private instaceModelUser!: typeof User;

  constructor(instanceModel?: typeof User);
  constructor(instanceModel: any) {
    if (instanceModel !== undefined) {
      this.instaceModelUser = instanceModel;
    }
  }

  public async createData(
    data: IDataUser
  ): Promise<IResponseCreated | ObjError> {
    try {
      let user;
      if (this.instaceModelUser !== undefined) {
        user = await this.instaceModelUser.create(data);
      }
      if (user) {
        return {
          status: 201,
          user: data,
        };
      } else {
        return {
          status: 400,
        };
      }
    } catch (error: any) {
      if (error instanceof UniqueConstraintError) {
        return {
          status_error: 400,
          error_unique: error.errors[0].message,
        };
      } else {
        return {
          status_error: 400,
        };
      }
    }
  }

  public async selectWithVariable(where: { [ index : string] : string | number} ,atributes ?: [string]  ) {
    return this.instaceModelUser.findOne({ where })
  }
}

export default UserDao;
