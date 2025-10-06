import express from "express";
import QuestionarioController from "../Controllers/QuestionarioController.js";

const router = express.Router();

// POST /usuario → cria um novo questionario
router.post("/", QuestionarioController.criar);

// GET /questionario → lista todos os questionarios
router.get("/", QuestionarioController.listar);

// GET /questionario/:id → busca questionario específico
router.get("/:id", QuestionarioController.buscarPorId);

export default router;
