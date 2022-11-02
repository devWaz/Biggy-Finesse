import express, { urlencoded } from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";
import connect from "./db/connection.js";
import entry from "./Routes/entry.js";
import server from "./Routes/server.js";
import user from "./Routes/user.js";
import { errors } from "celebrate";
import dotenv from "dotenv";
import path from "path";
dotenv.config({path: "config.env"});

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// MiddleWares
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());
// Middleware to allow reqs from all domains & localhost
app.all("/*" , (req , res , next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type , Accept, Authorization" )
    res.header("Access-Control-Allow-Methods", "POST , GET, PUT, PATCH, DELETE")
    next()
})

//View Engine
app.set('view engine' , 'ejs');

app.use("/css" , express.static(path.resolve(__dirname, "assests/css/style.css")));
app.use("/js" , express.static(path.resolve(__dirname, "assests/js/script.js")));

// Routes
app.use("" , server);
app.use("/api/user" , user);
app.use("/api/entry" , entry);

app.use(errors())

const PORT = process.env.PORT || 8080

app.listen(PORT , () => {
    connect()
    console.log(`Server Started at port ${PORT}`);
})

