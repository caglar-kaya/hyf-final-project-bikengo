import express from "express";
import getBikes from "../controllers/bike/getBikes.js";
import createBike from "../controllers/bike/createBike.js";
import searchBikes from "../controllers/bike/searchBikes.js";
import authenticateToken from "../middleware/auth.js";
import getSingleBike from "../controllers/bike/getSingleBike.js";

const bikeRouter = express.Router();

bikeRouter.get("/", getBikes);
bikeRouter.get("/search", searchBikes);
bikeRouter.post("/create", authenticateToken, createBike);
bikeRouter.get("/:id", getSingleBike);

export default bikeRouter;
