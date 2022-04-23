import express from "express";
import getBrands from "../controllers/brand/getBrands.js";
import getBrand from "../controllers/brand/getBrand.js";

const brandRouter = express.Router();

brandRouter.get("/", getBrands);
brandRouter.get("/:id", getBrand);

export default brandRouter;
