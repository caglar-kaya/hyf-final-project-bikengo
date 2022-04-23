import jwt from "jsonwebtoken";
import { logError } from "../util/logging.js";
import dotenv from "dotenv";
dotenv.config();

const authenticateToken = async (req, res, next) => {
  const token = req.header("accessToken");
  if (!token) {
    res.status(403).json({ success: false, msg: "Access Denied" });
  }
  try {
    let verified = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    logError(error);
    res.status(403).json({ success: false, msg: "Invalid token" });
  }
};

export default authenticateToken;
