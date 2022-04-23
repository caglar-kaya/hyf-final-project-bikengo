import Category from "../../models/Category.js";
import { logError } from "../../util/logging.js";

const getCategory = async (req, res) => {
  const { id: categoryID } = req.params;
  try {
    const category = await Category.findById(categoryID);
    if (category === null) {
      res.status(404).json({
        success: false,
        msg: `Can't find category with id : ${categoryID}, try again later`,
      });
    }
    res.status(200).json({ success: true, result: category });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get category, try again later" });
  }
};

export default getCategory;
