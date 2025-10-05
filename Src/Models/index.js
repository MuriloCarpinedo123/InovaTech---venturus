import { Sequelize } from "sequelize";
import animalModel from "./Animal.js";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

export const Animal = animalModel(sequelize);

sequelize.sync()
  .then(() => console.log("Banco sincronizado com sucesso"))
  .catch(err => console.error("Erro ao sincronizar banco:", err));
