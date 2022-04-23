import FrameHeight from "../../models/FrameHeight.js";
import { logError } from "../../util/logging.js";

const getFrameHeights = async (req, res) => {
  try {
    const frameHeights = await FrameHeight.find();
    if (!frameHeights.length) {
      res
        .status(404)
        .json({ success: false, msg: "No frame heights are available" });
    }
    res.status(200).json({ success: true, result: frameHeights });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get frameHeights, try again later",
    });
  }
};

export default getFrameHeights;
