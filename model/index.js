import { Sequelize } from "sequelize";

import { configDB } from "../config/db.config.js";

const db = new Sequelize(configDB.DB, configDB.USER, configDB.PASSWORD, {
  host: configDB.HOST,
  dialect: configDB.dialect,
  operatorsAliases: false,
  pool: {
    max: configDB.pool.max,
    min: configDB.pool.min,
    acquire: configDB.pool.acquire,
    idle: configDB.pool.idle,
  },
});

export default db;
