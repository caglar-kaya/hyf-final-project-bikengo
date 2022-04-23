import Condition from "../../models/Condition.js";
import { logError } from "../../util/logging.js";

const getCondition = async (req, res) => {
  const { id: conditionID } = req.params;
  try {
    const condition = await Condition.findById(conditionID);
    if (condition === null) {
      res.status(404).json({
        success: false,
        msg: `Can't find condition with id : ${conditionID}, try again later`,
      });
    }
    res.status(200).json({ success: true, result: condition });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get conditions, try again later",
    });
  }
};

export default getCondition;
