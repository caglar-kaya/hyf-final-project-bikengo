import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import Button from "../../../components/button/Button";
import axios from "axios";
import PropTypes from "prop-types";
import "./Photos.css";
import Loading from "../../../components/loading/Loading";
const Photos = ({ setPhotos }) => {
  const [filePhotoData, setFilePhotoData] = useState([]);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isLoading, setLoading] = useState(false);

  //* Add Bike Photo

  const filePhotoChangeHandler = (picture) => {
    setIsImageUploaded(false);
    setFilePhotoData(picture);
  };
  const multipleFilesUpload = async (data) => {
    setLoading(true);
    await axios
      .post(`${process.env.BASE_SERVER_URL}/api/photos/upload`, data)
      .then((res) => {
        setPhotos(res.data.urls);
        setFilePhotoData(true);
        setLoading(false);
        setIsImageUploaded(true);
      })
      .catch((err) => {
        alert("Cannot upload photos", err);
      });
  };

  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    for (let i = 0; i < filePhotoData.length; i++) {
      formData.append("images", filePhotoData[i]);
    }
    if (filePhotoData === true) {
      alert("Photos are uploaded successfully");
    } else if (filePhotoData.length < 3 || filePhotoData.length > 7) {
      alert("Please upload between 3 and 7 photos");
    } else if (isLoading === false) {
      await multipleFilesUpload(formData);
    }
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="rounded-lg shadow-sm bg-gray-50 w-full">
        {/* photo url begin here */}

        <div className="m-4">
          <label className="inline-block mb-2 text-gray-500">
            Upload Photos, please choose at least 3 photos and then click upload
          </label>
          {/* if state should be here */}
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={filePhotoChangeHandler}
            imgExtension={[".jpg", ".png", ".jpeg"]}
            maxFileSize={1024 * 1024}
            label={"Max file size: 2mb, accepted: jpg, png, jpeg"}
            withPreview={true}
          />
        </div>

        {/* photo url end here */}
        <div className="flex p-2  justify-center space-x-4">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Button
                text={isImageUploaded ? "Uploaded" : "Upload"}
                onClick={() => UploadMultipleFiles()}
                classes={
                  // eslint-disable-next-line quotes
                  `px-4 py-2  ${
                    isImageUploaded
                      ? "bg-gray-200 text-text"
                      : "text-white bg-green-500"
                  } rounded shadow-md w-64 `
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
Photos.propTypes = {
  setPhotos: PropTypes.func.isRequired,
};

export default Photos;
