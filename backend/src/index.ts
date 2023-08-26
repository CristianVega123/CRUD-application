import Express from "express";
import { config } from "dotenv";

//? import --> Routes
import Login from "./routes/login.route";

//? connect Database 
import { auth_database } from "./models/connect";



config()
const app = Express();


app.use(Express.json())
app.use(Express.urlencoded({extended: false}))


//? Routes  
app.use("/api", Login);

const PORT = process.env.PORT_SERVER || 3200;

//! Connect to the database
auth_database()

app.listen( PORT , () => {
    console.log("El programa esta corriendo, Port: ", PORT)
})
