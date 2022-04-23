import FrameHeight from "../../models/FrameHeight.js";
import { logError } from "../../util/logging.js";

const getFrameHeight = async (req, res) => {
  const { id: frameHeightID } = req.params;
  try {
    const frameHeight = await FrameHeight.findById(frameHeightID);
    if (frameHeight === null) {
      res.status(404).json({
        success: false,
        msg: `Can't find frame height with id : ${frameHeightID}, try again later`,
      });
    }
    res.status(200).json({ success: true, result: frameHeight });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to get frameHeight, try again later",
    });
  }
};

export default getFrameHeight;
