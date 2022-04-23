import mongoose from "mongoose";
import validateAllowedFields from "../util/validateAllowedFields.js";

const FrameHeightSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  dataId: { type: Number, unique: true },
});
const FrameHeight = mongoose.model("frameheights", FrameHeightSchema);

export const validateFrameHeight = (frameHeightObject) => {
  const errorList = [];

  const allowedKeys = ["value", "dataId"];
  const validatedKeysMessage = validateAllowedFields(
    frameHeightObject,
    allowedKeys
  );
  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (frameHeightObject.value == null) {
    errorList.push("value is a required field");
  }

  return errorList;
};

export default FrameHeight;
