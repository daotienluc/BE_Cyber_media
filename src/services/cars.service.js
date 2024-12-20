import models from "../common/sequelize/init.sequelize.js";

const carService = {
  carList: async () => {
    // Lỗi kiểm soát đc
    // const passNguoiDungGuiLen = 123;
    // const passTrongDB = 1234;
    // if (passNguoiDungGuiLen !== passTrongDB) {
    //   throw new BadRequestException("Mật khẩu không chính xác");
    // }

    // Lỗi không kiểm soát đc
    // console.log(abc);
    const cars = await models.cars.findAll({ raw: true });
    return cars;
  },
};
export default carService;
