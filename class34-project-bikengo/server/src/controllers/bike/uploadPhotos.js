import { logError } from "../../util/logging.js";
import { uploader } from "../../util/cloudinary.js";

const validateImages = (images) => {
  const maxImageSize = 1024 * 1024;
  if (images.length < 3 || images.length > 7) {
    return {
      msg: "Please provide three to seven photos",
    };
  }
  for (const image of images) {
    if (
      image.mimetype !== "image/jpeg" &&
      image.mimetype !== "image/png" &&
      image.mimetype !== "image/jpg"
    ) {
      return {
        msg: "Error uploading images, Unsupported file format!",
      };
    }
    if (image.size > maxImageSize) {
      return {
        msg: "Error uploading images,The file size is too large",
      };
    }
  }
  return {};
};

const uploadPhotos = async (req, res) => {
  try {
    const { files } = req;
    const urls = [];

    const validateImagesMessages = validateImages(files);
    if (validateImagesMessages.msg) {
      return res.status(400).json({
        success: false,
        msg: validateImagesMessages.msg,
      });
    }

    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
    }
    return res.status(200).json({ success: true, urls: urls });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to upload images, try again later",
    });
  }
};

export default uploadPhotos;
