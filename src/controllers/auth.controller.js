import { responseSuccess } from "../common/helpers/response.helper.js";
import authService from "../services/auth.service.js";

const authController = {
  register: async (req, res, next) => {
    try {
      const userNew = await authService.register(req);
      const resData = responseSuccess(userNew, "Đăng ký thành công !", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const userNew = await authService.login(req);
      const data = responseSuccess(userNew, "Đăng nhập thành công !", 200);
      res.status(data.code).json(data);
    } catch (error) {
      next(error);
    }
  },
};

export default authController;
