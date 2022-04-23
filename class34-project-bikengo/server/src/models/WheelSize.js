import mongoose from "mongoose";
import validateAllowedFields from "../util/validateAllowedFields.js";

const WheelSizeSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  dataId: { type: Number, unique: true },
});
const WheelSize = mongoose.model("wheelsizes", WheelSizeSchema);

export const validateWheelSize = (sizeObject) => {
  const errorList = [];

  const allowedKeys = ["value", "dataId"];
  const validatedKeysMessage = validateAllowedFields(sizeObject, allowedKeys);
  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (sizeObject.value == null) {
    errorList.push("value is a required field");
  }

  return errorList;
};

export default WheelSize;
