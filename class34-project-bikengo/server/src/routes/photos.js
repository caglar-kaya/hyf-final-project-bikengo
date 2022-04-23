import express from "express";
import uploadPhotos from "../controllers/bike/uploadPhotos.js";
import upload from "../middleware/multer.js";
const photoRouter = express.Router();

photoRouter.post("/upload", upload.array("images"), uploadPhotos);
export default photoRouter;
