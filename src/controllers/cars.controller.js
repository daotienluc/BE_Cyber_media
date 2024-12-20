import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper.js";
import carService from "../services/cars.service.js";

const carsController = {
  carList: async (req, res, next) => {
    try {
      const cars = await carService.carList();

      const resData = responseSuccess(
        cars,
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
