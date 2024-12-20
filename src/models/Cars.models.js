// code first: đi từ code tạo ra db
// tạo table bằng code javascript
import { DataTypes } from "sequelize";
import { sequelize } from "../common/sequelize/init.sequelize.js";

// tạo ra model từ define
const Cars = sequelize.define(
  "Cars",
  {
    car_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    passengers: {
      type: DataTypes.INTEGER,
    },
    max_speed: {
      type: DataTypes.STRING,
    },
    gearbox_type: {
      type: DataTypes.STRING,
    },
    fuel_type: {
      type: DataTypes.STRING,
    },
    price_per_day: {
      type: DataTypes.DOUBLE,
    },
    discount_percentage: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "cars",
    timestamps: false,
  }
);

Cars.sync()
  .then(() => {
    console.log("Đồng bộ table cars thành công");
  })
  .catch(() => {
    console.log("Đồng bộ table cars không thành công");
  });

app.get("/cars", async (req, res, next) => {
  // const cars = await sequelize.query("SELECT \* FROM cars");

  const cars = await Cars.findAll({ raw: true });
  console.log({ cars });

  res.json(cars);
});

export default Cars;
