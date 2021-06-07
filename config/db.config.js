export const configDB = {
  HOST: procces.env.HOST, // set to localhost, if you want to push to git and pull to server
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DBNAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
