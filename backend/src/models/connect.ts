import { sequelize } from './database/pool'
import "./entity/User.models"

async function auth_database() {
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: true})
        console.log('Connection has been established successfully');
        
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
         
    }
}

export { auth_database };