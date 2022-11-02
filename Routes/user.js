import express from "express";
const router = express.Router();
import userController from "../Controllers/userController.js";

router.post("/sign-up" , userController.SignUp)

export default router;