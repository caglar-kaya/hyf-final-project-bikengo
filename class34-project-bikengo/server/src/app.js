import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import categoryRouter from "./routes/category.js";
import wheelSizeRouter from "./routes/wheelSize.js";
import brandRouter from "./routes/brand.js";
import typeRouter from "./routes/type.js";
import frameHeightRouter from "./routes/frameHeight.js";
import conditionRouter from "./routes/condition.js";
import bikeRouter from "./routes/bike.js";
import photoRouter from "./routes/photos.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/type", typeRouter);
app.use("/api/frameHeight", frameHeightRouter);
app.use("/api/wheelSize", wheelSizeRouter);
app.use("/api/bike", bikeRouter);
app.use("/api/condition", conditionRouter);
app.use("/api/photos", photoRouter);

export default app;
