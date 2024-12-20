import { responseSuccess } from "../common/helpers/response.helper.js";
import userService from "../services/users.service.js";

const usersController = {
  userList: async (req, res, next) => {
    try {
      const users = userService.userList();
      const resData = responseSuccess(
        users,
        "Lấy danh sách user thành công !",
        200
      );
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default usersController;
