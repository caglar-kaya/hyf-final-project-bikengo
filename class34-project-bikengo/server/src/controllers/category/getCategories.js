import Category from "../../models/Category.js";
import { logError } from "../../util/logging.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories.length) {
      res
        .status(404)
        .json({ success: false, msg: "No categories are available" });
    }
    res.status(200).json({ success: true, result: categories });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get users, try again later" });
  }
};

export default getCategories;
