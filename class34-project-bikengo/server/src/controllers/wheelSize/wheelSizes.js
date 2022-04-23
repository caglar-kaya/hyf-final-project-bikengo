import WheelSize from "../../models/WheelSize.js";
import { logError } from "../../util/logging.js";
const getWheelSizes = async (req, res) => {
  try {
    const wheelSizes = await WheelSize.find();
    if (!wheelSizes.length) {
      res
        .status(404)
        .json({ success: false, msg: "No wheel sizes are available" });
    }
    res.status(200).json({ success: true, result: wheelSizes });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get wheelSizes, try again later",
    });
  }
};

export default getWheelSizes;
