import User from "../../models/User.js";
import { logError } from "../../util/logging.js";

const deleteUser = async (req, res) => {
  const { id: userID } = req.params;
  try {
    const user = await User.findByIdAndDelete(userID);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, msg: `No user found with this ${userID}` });
    }

    res
      .status(200)
      .json({ success: true, msg: `User with ${userID} has been deleted` });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to delete user, try again later" });
  }
};
export default deleteUser;
