import express from "express";
import carsController from "../controllers/cars.controller.js";

const carsRouter = express.Router();

carsRouter.get("/cars-list", carsController.carList);

export default carsRouter;
