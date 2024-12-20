import models from "../common/sequelize/init.sequelize.js";

const userService = {
  userList: async () => {
    const users = await models.users.findAll({ raw: true });
    return users;
  },
};

export default userService;
