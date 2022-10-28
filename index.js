import express, { urlencoded } from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";
import connect from "./db/connection.js";
import entry from "./Routes/entry.js";
import server from "./Routes/server.js";
import user from "./Routes/user.js";
import { errors } from "celebrate";


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

// Routes
app.use("" , server);
app.use("/api/user" , user);
app.use("/api/entry" , entry);

app.use(errors())

const PORT = 8080;
app.listen(PORT , () => {
    connect()
    console.log(`Server Started at port ${PORT}`);
})

