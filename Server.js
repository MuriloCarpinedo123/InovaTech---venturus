import express from "express";
import { sequelize } from "./Src/Models/index.js";

import animalRoutes from "./Src/Routes/animalRoutes.js";
import usuarioRoutes from "./Src/Routes/usuarioRoutes.js";
import questionarioRoutes from "./Src/Routes/questionarioRoutes.js";

const app = express();
app.use(express.json());

// Rotas
app.use("/animal", animalRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/questionario", questionarioRoutes);

// Conectar e sincronizar banco
sequelize
  .sync()
  .then(() => console.log("Banco sincronizado com sucesso"))
  .catch((err) => console.error("Erro ao sincronizar DB:", err));

app.listen(8080, () => {
  console.log("Servidor funcionando na porta 8080");
});