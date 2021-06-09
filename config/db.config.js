export const configDB = {
  HOST: "localhost", // set to localhost, if you want to push to git and pull to server
  USER: "root",
  PASSWORD: "root",
  DB: "kedar",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
