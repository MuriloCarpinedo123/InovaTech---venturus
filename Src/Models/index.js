import { Sequelize } from "sequelize";
import animalModel from "./Animal.js";
import usuarioModel from "./Usuario.js";
import questionarioModel from "./Questionario.js";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

export const Animal = animalModel(sequelize);
export const Usuario = usuarioModel(sequelize);
export const Questionario = questionarioModel(sequelize);

Usuario.hasOne(Questionario, {
  foreignKey: "usuarioId",
  onDelete: "CASCADE",
});
Questionario.belongsTo(Usuario, {
  foreignKey: "usuarioId",
});

sequelize
  .sync()
  .then(() => console.log("Banco sincronizado com sucesso"))
  .catch((err) => console.error("Erro ao sincronizar banco:", err));
