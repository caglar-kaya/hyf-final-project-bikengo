import Bike from "../../models/Bike.js";
import { logError } from "../../util/logging.js";

const getBikes = async (req, res) => {
  try {
    const queryObject = {};

    if (req.query["title"]) {
      queryObject.title = {
        $regex: req.query["title"],
        $options: "i",
      };
    }
    if (req.query["status"]) {
      queryObject.status = req.query["status"];
    }
    if (req.query["featured"]) {
      queryObject.featured = req.query["featured"] === "true" ? true : false; // ternary operator to set property equal to what is in the  query
    }
    if (req.query["sell-faster"]) {
      queryObject.sellFaster =
        req.query["sell-faster"] === "true" ? true : false;
    }
    if (req.query["brand"]) {
      queryObject.brand = req.query["brand"];
    }
    if (req.query["category"]) {
      queryObject.category = req.query["category"];
    }
    if (req.query["type"]) {
      queryObject.type = req.query["type"];
    }
    if (req.query["condition"]) {
      queryObject.condition = req.query["condition"];
    }
    if (req.query["frame-height"]) {
      queryObject.frameHeight = req.query["frame-height"];
    }
    if (req.query["wheels-size"]) {
      queryObject.wheelsSize = req.query["wheels-size"];
    }
    let filterResult = Bike.find(queryObject).populate([
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
    //sorting
    if (req.query["sort-price"] && req.query["sort-price"] === "max") {
      filterResult.sort({ price: -1 });
    }
    if (req.query["sort-price"] && req.query["sort-price"] === "min") {
      filterResult.sort({ price: 1 });
    }

    // pagination and limit
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const bikes = await filterResult.skip(skip).limit(limit);
    if (!bikes.length) {
      return res.status(404).json({
        success: false,
        msg: "Unfortunately no result for Your search",
      });
    }

    res.status(200).json({ success: true, bikes, nHits: bikes.length });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get bikes, try again later" });
  }
};

export default getBikes;
