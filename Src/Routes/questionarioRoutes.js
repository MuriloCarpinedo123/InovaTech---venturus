import express from "express";
import QuestionarioController from "../Controllers/QuestionarioController.js";

const router = express.Router();

router.post("/", QuestionarioController.criar);

router.get("/", QuestionarioController.listar);

router.get("/:id", QuestionarioController.buscarPorId);

export default router;
