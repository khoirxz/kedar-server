import { Sequelize } from "sequelize";

import db from "./index.js";

const { DataTypes } = Sequelize;

//Schema
const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.INTEGER(11),
    },
    no_identitas: {
      type: DataTypes.INTEGER(11),
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  { freezeTableName: true }
);

export default Users;
