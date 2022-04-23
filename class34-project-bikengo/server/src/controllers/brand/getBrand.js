import Brand from "../../models/Brand.js";
import { logError } from "../../util/logging.js";

const getBrand = async (req, res) => {
  const { id: brandID } = req.params;
  try {
    const brand = await Brand.findById(brandID);
    if (brand === null) {
      res.status(404).json({
        success: false,
        msg: `Can't find brand with id : ${brandID}, try again later`,
      });
    }
    res.status(200).json({ success: true, result: brand });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get brand, try again later" });
  }
};

export default getBrand;
