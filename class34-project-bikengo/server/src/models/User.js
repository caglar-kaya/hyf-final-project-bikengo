import mongoose from "mongoose";
import validateAllowedFields from "../util/validateAllowedFields.js";
import validateRequiredFields from "../util/validateRequiredFields.js";
import validator from "validator";

// nested addressSchema inside users
const addressSchema = new mongoose.Schema({
  city: { type: String, required: true },
  postcode: {
    type: String,
    required: true,
    match: [
      /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
      "Please provide valid postCode",
    ],
  },
  street: { type: String, required: true },
  houseNumber: { type: Number, required: true, maxlength: 4 },
  suffix: { type: String, maxlength: 5 },
});
//user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: { type: String },
  lastName: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },

  password: { type: String, required: true, minlength: 6 },
  phone: { type: Number },
  address: {
    type: addressSchema,
  },
  photo: { type: String },
  ads: [{ type: mongoose.Schema.Types.ObjectId, ref: "bikes" }],
  favs: [{ type: mongoose.Schema.Types.ObjectId, ref: "bikes" }],
});

const User = mongoose.model("users", userSchema);

export const validateUser = (userObject, boolean) => {
  const errorList = [];
  const allowedKeys = [
    "username",
    "firstName",
    "lastName",
    "email",
    "password",
    "phone",
    "address",
    "photo",
    "ads",
    "favs",
  ];
  const requiredFields = ["username", "email", "password"];

  const validatedKeysMessage = validateAllowedFields(userObject, allowedKeys);
  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (boolean) {
    const validatedRequiredFieldsMessage = validateRequiredFields(
      userObject,
      requiredFields
    );
    if (validatedRequiredFieldsMessage.length > 0) {
      errorList.push(validatedRequiredFieldsMessage);
    }
  }

  return errorList;
};

export default User;
