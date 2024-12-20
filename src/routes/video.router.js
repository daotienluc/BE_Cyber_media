import express from "express";
import models from "../common/sequelize/init.sequelize.js";
import videoController from "../controllers/videos.controller.js";

const videoRouter = express.Router();

videoRouter.get("/video-list", videoController.videoList);

export default videoRouter;
