// getConditions, getCondition \

import Condition from "../../models/Condition.js";
import { logError } from "../../util/logging.js";

const getConditions = async (req, res) => {
  try {
    const conditions = await Condition.find();
    if (!conditions.length) {
      res
        .status(404)
        .json({ success: false, msg: "No conditions are available" });
    }
    res.status(200).json({ success: true, result: conditions });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get conditions, try again later",
    });
  }
};

export default getConditions;
