import User from "../../models/User.js";
import jwt from "jsonwebtoken";
import { logError } from "../../util/logging.js";
import dotenv from "dotenv";
dotenv.config();

const authLogin = async (req, res) => {
  try {
    const { email } = req.user;
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(404).json({ success: false, msg: "User is not Found" });
    }
    const accessToken = jwt.sign(
      { email: findUser.email, id: findUser._id },
      process.env.JWT_ACCESS_TOKEN,
      {
        expiresIn: "30d",
      }
    );

    findUser.password = null;
    return res.status(200).json({ success: true, user: findUser, accessToken });
  } catch (error) {
    logError(error);
    return res
      .status(500)
      .json({ success: false, msg: "Unable to get users, try again later" });
  }
};

export default authLogin;
