import Type from "../../models/Type.js";
import { logError } from "../../util/logging.js";

const getTypes = async (req, res) => {
  try {
    const types = await Type.find();
    if (!types.length) {
      res.status(404).json({ success: false, msg: "No types are available" });
    }
    res.status(200).json({ success: true, result: types });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get types, try again later" });
  }
};

export default getTypes;
