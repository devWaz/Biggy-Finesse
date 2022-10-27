import express from "express";
const router = express.Router()
import entryController from "../Controllers/entryController.js";

router.get("./winners/list" , entryController.listWinners);

export default router;