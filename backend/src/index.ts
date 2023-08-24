import Express from "express";
import { config } from "dotenv";

// import --> Routes
import Login from "./routes/login.route";

// connect Database 
import xd from "./models/connect";
config()
const app = Express();



xd()

// Routes  
app.use("/api", Login);

const PORT = process.env.PORT_SERVER || 3200;
app.listen( PORT , () => {
    console.log("El programa esta corriendo, Port: ", PORT)
})
