import { Sequelize } from "sequelize";
import initModels from "../../models/init-models.js";

export const sequelize = new Sequelize(
  "mysql://root:quynhiu1@localhost:3307/db_cyber_media"
);
const models = initModels(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log("Kết nối database thành công");
  })
  .catch(() => {
    console.log("Kết nối thất bại");
  });

export default models;
