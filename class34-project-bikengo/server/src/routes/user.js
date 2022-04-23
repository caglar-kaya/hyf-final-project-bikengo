import express from "express";
import deleteUser from "../controllers/user/deleteUser.js";
import createUser from "../controllers/user/createUser.js";
import getSingleUser from "../controllers/user/getSingleUser.js";
import getUser from "../controllers/user/getUser.js";
import getAuthUser from "../controllers/user/getAuthUser.js";
import updateUser from "../controllers/user/updateUser.js";
import authenticateToken from "../middleware/auth.js";
const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.post("/login", getUser);
userRouter.get("/authLogin", authenticateToken, getAuthUser);
userRouter.get("/:id", getSingleUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
export default userRouter;
