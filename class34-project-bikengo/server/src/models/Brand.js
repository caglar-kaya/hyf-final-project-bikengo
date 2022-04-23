import mongoose from "mongoose";
import validateAllowedFields from "../util/validateAllowedFields.js";

const brandSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  dataId: { type: Number, unique: true },
});
const Brand = mongoose.model("brands", brandSchema);

export const validateBrand = (brandObject) => {
  const errorList = [];

  const allowedKeys = ["value", "dataId"];
  const validatedKeysMessage = validateAllowedFields(brandObject, allowedKeys);
  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (brandObject.value == null) {
    errorList.push("value is a required field");
  }

  return errorList;
};

export default Brand;
