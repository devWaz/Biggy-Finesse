import express from "express";
const router = express.Router();
import userController from "../Controllers/userController.js";
import {celebrate, Joi} from "celebrate";

router.post("/sign-up" , celebrate({
    body: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required().email(),
        telephone: Joi.string().required(),
        referral_code: Joi.string().required()
    })
}), userController.SignUp)

export default router;