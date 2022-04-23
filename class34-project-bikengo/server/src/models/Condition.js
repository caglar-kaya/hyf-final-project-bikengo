import mongoose from "mongoose";
import validateAllowedFields from "../util/validateAllowedFields.js";

const conditionSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  dataId: { type: Number, unique: true },
});
const Condition = mongoose.model("conditions", conditionSchema);

export const validateCondition = (conditionObject) => {
  const errorList = [];

  const allowedKeys = ["value", "dataId"];
  const validatedKeysMessage = validateAllowedFields(
    conditionObject,
    allowedKeys
  );
  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (conditionObject.value == null) {
    errorList.push("value is a required field");
  }

  return errorList;
};

export default Condition;
