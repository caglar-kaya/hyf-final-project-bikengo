import WheelSize from "../../models/WheelSize.js";
import { logError } from "../../util/logging.js";
const getWheelSize = async (req, res) => {
  const { id: wheelSizeID } = req.params;
  try {
    const wheelSize = await WheelSize.findById(wheelSizeID);
    if (wheelSize === null) {
      res.status(404).json({
        success: false,
        msg: `Can't find wheel size with id : ${wheelSizeID}, try again later`,
      });
    }
    res.status(200).json({ success: true, result: wheelSize });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get wheelSizes, try again later",
    });
  }
};
export default getWheelSize;
