import mongoose from "mongoose";
import validateAllowedFields from "../util/validateAllowedFields.js";

const categorySchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  dataId: { type: Number, unique: true },
});
const Category = mongoose.model("categories", categorySchema);

export const validateCategory = (categoryObject) => {
  const errorList = [];

  const allowedKeys = ["value", "dataId"];
  const validatedKeysMessage = validateAllowedFields(
    categoryObject,
    allowedKeys
  );
  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (categoryObject.value == null) {
    errorList.push("value is a required field");
  }

  return errorList;
};

export default Category;
