import db from "../model/index.js";

import { Sequelize } from "sequelize";

const { QueryTypes } = Sequelize;

export const checkVersion = async (req, res) => {
    try {
      const row = await db.query(`SELECT * FROM c_kedar ORDER BY id ASC LIMIT 1`, {type: QueryTypes.SELECT});
      res.status(200).send(row[0]);
    } catch (error) {
      console.log(error);
    }
};