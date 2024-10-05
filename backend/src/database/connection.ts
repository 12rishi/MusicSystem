import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "mysql",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME as string,
  password: process.env.DB_PASSWORD || "",
  port: Number(process.env.DB_PORT) || 3306,
  models: [__dirname + "/models"],
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connected db");
  })
  .catch((err: Error) => {
    console.log(err?.message);
  });
sequelize.sync({ force: false }).then(() => {
  console.log("synced!!!");
});
