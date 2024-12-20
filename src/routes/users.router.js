import express from "express";
import models from "../common/sequelize/init.sequelize.js";
import usersController from "../controllers/users.controller.js";

const usersRouter = express.Router();

usersRouter.get("/users-list", usersController.userList);

export default usersRouter;
