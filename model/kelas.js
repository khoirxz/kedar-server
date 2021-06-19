import { Sequelize } from "sequelize";

import db from "./index.js";

const { DataTypes } = Sequelize;

// Schema Kelas
const Kelas = db.define("t_class", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  //! user_id mengambil dari user -> id
  user_id: {
    type: DataTypes.STRING,
  },
  is_generated_no_identitas: {
    type: DataTypes.INT(11),
  },
  createdAt: {
    type: DataTypes.DATE,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: "updated_at",
  },
});

export default Kelas;
