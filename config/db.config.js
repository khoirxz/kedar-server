export const configDB = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "KedarSukses2021",
  DB: "kedar",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
