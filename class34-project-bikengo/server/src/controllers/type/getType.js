import Type from "../../models/Type.js";
import { logError } from "../../util/logging.js";

const getType = async (req, res) => {
  const { id: typeID } = req.params;
  try {
    const type = await Type.findById(typeID);
    if (type === null) {
      res.status(404).json({
        success: false,
        msg: `Can't find type with id : ${typeID}, try again later`,
      });
    }
    res.status(200).json({ success: true, result: type });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get type, try again later" });
  }
};

export default getType;
