import { Sequelize } from "sequelize";
import animalModel from "./Animal.js";
import usuarioModel from "./Usuario.js"; // ✅ importa o model de usuário

// Cria a conexão com o banco (mantido igual)
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

// Inicializa os models
export const Animal = animalModel(sequelize);
export const Usuario = usuarioModel(sequelize); // ✅ registra o model de usuário

// Sincroniza o banco
sequelize.sync()
  .then(() => console.log("Banco sincronizado com sucesso"))
  .catch(err => console.error("Erro ao sincronizar banco:", err));
