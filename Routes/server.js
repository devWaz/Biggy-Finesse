import express  from "express";
const router = express.Router();
import { index } from "../Controllers/serverController.js";

router.get("/" , index);
export default router;