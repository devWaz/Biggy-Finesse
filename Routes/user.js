import express from "express";
const router = express.Router();
import userController from "../Controllers/userController.js";
import {celebrate, Joi} from "celebrate";

router.post("/sign-up" , userController.SignUp)

export default router;