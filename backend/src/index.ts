import Express from "express";
import { config } from "dotenv";
import session from 'express-session'
import cors from 'cors'
import cookie from 'cookie-parser'
import passport from 'passport'

//? import --> Routes
import SignIn from "./routes/signin.route";
import LogIn from "./routes/login.route";
import LogOut from "./routes/logout.route";

//? connect Database 
import { auth_database } from "./models/connect";



config()
const app = Express();
app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:4321", "http://localhost:5173"], 
    credentials: true,

}))
app.use(cookie())
app.use(Express.json())
app.use(session({
    secret: process.env.SECRET_SESSION as string,
    resave: true,
    saveUninitialized: true, 
    cookie: {}
}))
app.use(passport.initialize())
app.use(passport.authenticate('session'))
app.use(Express.urlencoded({extended: false}))

//? Routes  
app.use("/api", SignIn);
app.use("/api", LogIn);
app.use("/api", LogOut);

const PORT = process.env.PORT_SERVER || 3200;

//! Connect to the database
auth_database()

app.listen( PORT , () => {
    console.log("El programa esta corriendo, Port: ", PORT)
})
