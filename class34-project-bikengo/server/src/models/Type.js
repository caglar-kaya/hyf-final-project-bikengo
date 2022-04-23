import mongoose from "mongoose";
import validateAllowedFields from "../util/validateAllowedFields.js";

const TypeSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  dataId: { type: Number, unique: true },
});
const Type = mongoose.model("types", TypeSchema);

export const validateType = (typeObject) => {
  const errorList = [];

  const allowedKeys = ["value", "dataId"];
  const validatedKeysMessage = validateAllowedFields(typeObject, allowedKeys);
  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (typeObject.value == null) {
    errorList.push("value is a required field");
  }

  return errorList;
};

export default Type;
