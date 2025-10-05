import express from "express";
import db from "./Src/Config/database.js"; // novo import

import animalRoutes from "./Src/Routes/animalRoutes.js";


const app = express();

app.use(express.json());

// Rotas
app.use("/animal", animalRoutes);


// Conectar e sincronizar banco
db.sync()
  .then(() => console.log("Banco sincronizado com sucesso"))
  .catch((err) => console.error("Erro ao sincronizar DB:", err));

app.listen(8080, () => {
  console.log("Servidor funcionando na porta 8080");
});
