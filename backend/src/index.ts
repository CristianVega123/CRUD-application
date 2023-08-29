import Express from "express";
import { config } from "dotenv";
import session from 'express-session'
import cors from 'cors'
import cookie from 'cookie-parser'
import passport from 'passport'

//? import --> Routes
import SignIn from "./routes/signin.route";
import LogIn from "./routes/login.route";

//? connect Database 
import { auth_database } from "./models/connect";



config()
const app = Express();
app.use(cors())
app.use(Express.urlencoded({extended: false}))
app.use(cookie())
app.use(Express.json())
app.use(session({
    secret: process.env.SECRET_SESSION as string,
    resave: true,
    saveUninitialized: false, 
}))
app.use(passport.initialize())
app.use(passport.session())

//? Routes  
app.use("/api", SignIn);
app.use("/api", LogIn);

const PORT = process.env.PORT_SERVER || 3200;

//! Connect to the database
auth_database()

app.listen( PORT , () => {
    console.log("El programa esta corriendo, Port: ", PORT)
})
