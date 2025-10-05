import { Sequelize } from "sequelize";

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite" // cria o arquivo localmente
});

export default db;
