import validationErrorMessage from "../../util/validationErrorMessage.js";
import { logError } from "../../util/logging.js";
import User, { validateUser } from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import dotenv from "dotenv";
dotenv.config();
const validateValues = (userToCreate) => {
  const { username, email, password, firstName, lastName, phone } =
    userToCreate;
  const errorList = [];
  const validateUsername = validator.isAlpha(username);
  if (!validateUsername) {
    errorList.push("Invalid user name");
  }

  const validateEmail = validator.isEmail(email);
  if (!validateEmail) {
    errorList.push("Invalid email");
  }

  const validatePassword = validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 0,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    returnScore: false,
    pointsPerUnique: 0,
    pointsPerRepeat: 0,
    pointsForContainingLower: 0,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 0,
  });
  if (!validatePassword) {
    errorList.push(
      "Password should be at least 8 characters long ,and includes upper case characters with numbers."
    );
  }

  if (firstName) {
    const validateFirstName = validator.isAlpha(firstName);
    if (!validateFirstName) {
      errorList.push("Invalid first name");
    }
  }

  if (lastName) {
    const validateLastName = validator.isAlpha(lastName);
    if (!validateLastName) {
      errorList.push("Invalid last name");
    }
  }
  if (phone) {
    const validatePhoneNumber = validator.isAlpha(phone, "nl-NL");
    if (!validatePhoneNumber) {
      errorList.push("Invalid phone number");
    }
  }
  return errorList;
};

const createUser = async (req, res) => {
  try {
    const { user } = req.body;
    if (typeof user !== "object") {
      return res.status(400).json({
        success: false,
        msg: `You need to provide a 'user' object. Received: ${JSON.stringify(
          user
        )}`,
      });
    }

    const errorList = validateUser(user, true);
    if (errorList.length > 0) {
      return res
        .status(400)
        .json({ success: false, msg: validationErrorMessage(errorList) });
    }

    const validateValuesList = validateValues(user);
    if (validateValuesList.length > 0) {
      return res.status(400).json({
        success: false,
        msg: validationErrorMessage(validateValuesList),
      });
    }

    const existUser = await User.findOne({ email: user.email });
    if (existUser) {
      return res
        .status(200)
        .json({ success: false, msg: "User already exists with that email" });
    }

    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    const newUser = await User.create(user);

    const accessToken = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_ACCESS_TOKEN,
      {
        expiresIn: "30d",
      }
    );

    newUser.password = null;
    return res.status(201).json({ success: true, user: newUser, accessToken });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to create user, try again later" });
  }
};

export default createUser;
