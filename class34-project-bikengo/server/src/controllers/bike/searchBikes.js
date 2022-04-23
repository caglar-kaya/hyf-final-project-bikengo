import Bike from "../../models/Bike.js";
import { logError } from "../../util/logging.js";
const searchBikes = async (req, res) => {
  try {
    const searchValue = req.query["search-value"];
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const bikes = await Bike.aggregate([
      {
        $search: {
          index: "search",
          text: {
            query: searchValue,
            path: {
              wildcard: "*",
            },
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $lookup: {
          from: "brands",
          localField: "brand",
          foreignField: "_id",
          as: "brand",
        },
      },
      {
        $lookup: {
          from: "types",
          localField: "type",
          foreignField: "_id",
          as: "type",
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $lookup: {
          from: "frameheights",
          localField: "frameHeight",
          foreignField: "_id",
          as: "frameHeight",
        },
      },
      {
        $lookup: {
          from: "wheelsizes",
          localField: "wheelsSize",
          foreignField: "_id",
          as: "wheelsSize",
        },
      },
      {
        $lookup: {
          from: "conditions",
          localField: "condition",
          foreignField: "_id",
          as: "condition",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $unwind: "$type",
      },
      {
        $unwind: "$brand",
      },
      {
        $unwind: "$category",
      },
      {
        $unwind: "$frameHeight",
      },
      {
        $unwind: "$condition",
      },
      {
        $unwind: "$wheelsSize",
      },
      {
        $project: {
          "user.password": 0,
          "user.ads": 0,
          "user.favs": 0,
        },
      },
      { $limit: limit },
      { $skip: skip },
    ]);
    if (!bikes.length) {
      return res.status(404).json({
        success: false,
        msg: "Unfortunately no result for Your search",
      });
    }
    return res.status(200).json({ success: true, bikes, nHits: bikes.length });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to search bikes, try again later" });
  }
};
export default searchBikes;
