import express from "express";
import UsuarioController from "../Controllers/UsuarioController.js";

const router = express.Router();

// POST /usuario → cria um novo tutor
router.post("/", UsuarioController.criar);

// GET /usuario → lista todos os tutores
router.get("/", UsuarioController.listar);

// GET /usuario/:id → busca tutor específico
router.get("/:id", UsuarioController.listar);

export default router;
