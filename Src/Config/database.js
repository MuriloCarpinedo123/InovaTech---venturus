import { Sequelize } from "sequelize";
import 'dotenv/config';

const db = new Sequelize(process.env.SUPABASE_DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false,
});

export default db;
