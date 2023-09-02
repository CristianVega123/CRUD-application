import { sequelize } from "./database/pool";
import "./entity/User.models";
import "./entity/Product.model"

async function auth_database() {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({force: true});
    await sequelize.sync();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

export { auth_database };
