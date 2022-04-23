import express from "express";
import getFrameHeight from "../controllers/frameHeight/getFrameHeight.js";
import getFrameHeights from "../controllers/frameHeight/getFrameHeights.js";

const frameHeightRouter = express.Router();

frameHeightRouter.get("/", getFrameHeights);
frameHeightRouter.get("/:id", getFrameHeight);

export default frameHeightRouter;
