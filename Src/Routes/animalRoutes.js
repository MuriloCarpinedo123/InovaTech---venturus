import express from "express";
import AnimalController from "../Controllers/AnimalController.js";

const router = express.Router();

// POST /animal → Cadastrar
router.post("/", AnimalController.criar);

// GET /animal → Listar animais com filtros
router.get("/", AnimalController.listar);

export default router;
