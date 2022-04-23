import express from "express";
import getWheelSizes from "../controllers/wheelSize/wheelSizes.js";
import getWheelSize from "../controllers/wheelSize/wheelSize.js";

const wheelSizeRouter = express.Router();

wheelSizeRouter.get("/", getWheelSizes);
wheelSizeRouter.get("/:id", getWheelSize);

export default wheelSizeRouter;
