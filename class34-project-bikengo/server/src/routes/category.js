import express from "express";
import getCategories from "../controllers/category/getCategories.js";
import getCategory from "../controllers/category/getCategory.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);

export default categoryRouter;
