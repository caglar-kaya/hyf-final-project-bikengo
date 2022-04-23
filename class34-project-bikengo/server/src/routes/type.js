import express from "express";
import getType from "../controllers/type/getType.js";
import getTypes from "../controllers/type/getTypes.js";

const typeRouter = express.Router();

typeRouter.get("/", getTypes);
typeRouter.get("/:id", getType);

export default typeRouter;
