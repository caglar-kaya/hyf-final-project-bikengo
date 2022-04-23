import Bike, { validateBike } from "../../models/Bike.js";
import { logError } from "../../util/logging.js";
import validationErrorMessage from "../../util/validationErrorMessage.js";
const createBike = async (req, res) => {
  try {
    const { user } = req;
    const { bike } = req.body;
    if (typeof bike !== "object") {
      return res.status(400).json({
        success: false,
        msg: `You need to provide a 'bike' object. Received: ${JSON.stringify(
          bike
        )}`,
      });
    }

    bike.user = user.id;
    const errorList = validateBike(bike, true);
    if (errorList.length > 0) {
      return res
        .status(400)
        .json({ success: false, msg: validationErrorMessage(errorList) });
    }

    const newBike = await Bike.create(bike);
    res.status(201).json({ success: true, Bike: newBike });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to create bike, try again later" });
  }
};

export default createBike;
