import User from "../../models/User.js";
import { logError } from "../../util/logging.js";

const getSingleUser = async (req, res) => {
  const { id: userID } = req.params;
  try {
    const user = await User.findById(userID);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, msg: `No user found with this ${userID}` });
    }

    user.password = null;
    res.status(200).json({ success: true, user: user });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get user, try again later" });
  }
};

export default getSingleUser;
