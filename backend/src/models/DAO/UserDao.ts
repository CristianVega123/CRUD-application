import { Mode } from 'fs';
import { ModelUser, User } from '../entity/User.models'
import { Model } from 'sequelize'

class UserDao {
    private instaceModelUser !: typeof User ;

    constructor(instanceModel ?: typeof User); 
    constructor(instanceModel: any){
        if (instanceModel !== undefined) {
            this.instaceModelUser = instanceModel;
        }
    }


    public async createData() {
        if (this.instaceModelUser !== undefined) {
            await this.instaceModelUser.create({})
        }
    }

}

export default UserDao