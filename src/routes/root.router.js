import express from "express";
import videoRouter from "./video.router.js";
import usersRouter from "./users.router.js";
import carsRouter from "./cars.router.js";
import authRouter from "./auth.Router.js";

const rootRouter = express.Router();

rootRouter.get("/", (req, res, next) => {
  res.send("Wellcome");
});

rootRouter.use("/videos", videoRouter);
rootRouter.use("/users", usersRouter);
rootRouter.use("/car", carsRouter);

rootRouter.use("/auth", authRouter);

export default rootRouter;
