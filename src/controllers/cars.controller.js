import { responseSuccess } from "../common/helpers/response.helper.js";
import carService from "../services/cars.service.js";

const carsController = {
  carList: async (req, res, next) => {
    try {
      const car = await carService.carList();

      const resData = responseSuccess(
        car,
        "Lấy danh sách xe thành công !",
        200
      );

      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default carsController;
