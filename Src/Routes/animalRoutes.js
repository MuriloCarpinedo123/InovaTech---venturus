import express from "express";
import AnimalController from "../Controllers/AnimalController.js";

const router = express.Router();

router.post("/", AnimalController.criar);

export default router;
