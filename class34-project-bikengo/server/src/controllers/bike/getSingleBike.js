import Bike from "../../models/Bike.js";
import { logError } from "../../util/logging.js";

const getSingleBike = async (req, res) => {
  try {
    const { id: bikeID } = req.params;
    const bike = await Bike.findOne({ _id: bikeID }).populate([
      {
        path: "brand",
        select: "value",
      },
      {
        path: "category",
        select: "value",
      },
      {
        path: "type",
        select: "value",
      },
      {
        path: "frameHeight",
        select: "value",
      },
      {
        path: "wheelsSize",
        select: "value",
      },
      {
        path: "condition",
        select: "value",
      },
      {
        path: "user",
        select: "username email",
      },
    ]);
    if (!bike) {
      return res.status(404).json({
        success: false,
        msg: `Can't find bike with id : ${bikeID}, try again later`,
      });
    }
    res.status(200).json({ success: true, bike });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get bike, try again later" });
  }
};

export default getSingleBike;
