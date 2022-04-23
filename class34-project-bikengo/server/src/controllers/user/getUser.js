//login
import User from "../../models/User.js";
import validationErrorMessage from "../../util/validationErrorMessage.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { logError } from "../../util/logging.js";
import validator from "validator";
import dotenv from "dotenv";
dotenv.config();
const validateValues = (userToFind) => {
  const { email } = userToFind;
  const errorList = [];
  const validateEmail = validator.isEmail(email);
  if (!validateEmail) {
    errorList.push("Invalid email");
  }
  return errorList;
};

const getUser = async (req, res) => {
  try {
    const { user } = req.body;

    const { email, password } = user;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: "Please provide email with password" });
    }

    const validateValuesList = validateValues(user);
    if (validateValuesList.length > 0) {
      return res.status(400).json({
        success: false,
        msg: validationErrorMessage(validateValuesList),
      });
    }

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, msg: "No account found with this email" });
    }

    const validPassword = await bcrypt.compare(password, findUser.password);
    if (!validPassword) {
      return res.status(401).json({ success: false, msg: "Invalid password" });
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

export default getUser;
