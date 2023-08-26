import { Sequelize } from 'sequelize'
import { config } from 'dotenv'

config()


let nameDatabase = process.env.NAME_DATABASE as string;
let usernameDatabase = process.env.USERNAME_DATABASE as string;
let passwordDatabase = process.env.PASSWORD_DATABASE as string;

const sequelize = new Sequelize(nameDatabase, usernameDatabase, passwordDatabase, {
    host: "localhost",
    dialect: "mysql",
    
})

export { sequelize }