import express from "express";
import UsuarioController from "../Controllers/UsuarioController.js";

const router = express.Router();

// POST /usuario → chama o controller
router.post("/", UsuarioController.criar);

export default router;
