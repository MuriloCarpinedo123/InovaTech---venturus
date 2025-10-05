import express from "express";
import AnimalController from "../Controllers/AnimalController.js"; // sobe um nível

const router = express.Router();

router.post("/animais", AnimalController.criar);

export default router;
