import Brand from "../../models/Brand.js";
import { logError } from "../../util/logging.js";

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    if (!brands.length) {
      res.status(404).json({ success: false, msg: "No Brands are available" });
    }
    res.status(200).json({ success: true, result: brands });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get brands, try again later" });
  }
};

export default getBrands;
