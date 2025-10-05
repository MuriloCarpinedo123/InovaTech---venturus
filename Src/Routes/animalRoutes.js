import express from "express";
import AnimalController from "./controllers/AnimalController.js";

const router = express.Router();

router.post("/animais", AnimalController.criar);

export default router;
