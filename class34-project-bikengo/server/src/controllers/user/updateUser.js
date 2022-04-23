import User, { validateUser } from "../../models/User.js";
import validationErrorMessage from "../../util/validationErrorMessage.js";
import { logError } from "../../util/logging.js";
import bcrypt from "bcrypt";
import validator from "validator";
const validateValues = (userToUpdate) => {
  const errorList = [];
  const { username, firstName, lastName, phone, password } = userToUpdate;
  if (username) {
    const validateUsername = validator.isAlpha(username);
    if (!validateUsername) {
      errorList.push("Invalid user name");
    }
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
  if (password) {
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
  }
  return errorList;
};
const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;

    const { user } = req.body;
    if (typeof user !== "object") {
      return res.status(400).json({
        success: false,
        msg: `You need to provide a 'user' object. Received: ${JSON.stringify(
          user
        )}`,
      });
    }

    if (user.email) {
      return res.status(403).json({
        success: false,
        msg: "Email is not allowed to be changed",
      });
    }
    const errorList = validateUser(user, false);
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

    if (user.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      userID,
      {
        $set: user,
      },
      { new: true }
    );

    updatedUser.password = null;
    return res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to update user, try again later",
    });
  }
};

export default updateUser;
