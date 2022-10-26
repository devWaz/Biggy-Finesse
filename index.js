import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";


// MiddleWares
app.use(morgan("dev"));
app.use(express.json());


app.listen(8080 , () => {
    console.log("Server Started!");
})

