import express from "express";
import getCondition from "../controllers/condition/getCondition.js";
import getConditions from "../controllers/condition/getConditions.js";

const conditionRouter = express.Router();

conditionRouter.get("/", getConditions);
conditionRouter.get("/:id", getCondition);

export default conditionRouter;
