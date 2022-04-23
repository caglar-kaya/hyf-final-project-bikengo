import React, { useState, useEffect, useContext } from "react";
import Select from "../../components/select/Select";
import Input from "../../components/input/Input";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Photos from "../components/photos/Photos";
import { userContext } from "../../provider/user";
import Modal from "../../components/modal/Modal";
import Loading from "../../components/loading/Loading";
const Ads = () => {
  const { localUser } = useContext(userContext);
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [address, setAddress] = useState({});
  const [bike, setBike] = useState({});

  //* Add Whole Bike
  const token = localStorage.getItem("user");
  const onSuccess = (data) => {
    alert("Your Bike is Successfully published.");
    const path = `/results/${data.Bike._id}`;
    navigate(path);
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/bike/create",
    onSuccess
  );
  useEffect(() => {
    return cancelFetch;
  }, []);

  useEffect(() => {
    setBike({ ...bike, photos: photos });
  }, [photos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localUser && localUser.username) {
      const date = new Date();
      let dataId = date.valueOf();
      const result = { bike: { dataId: dataId, ...bike, address: address } };

      performFetch({
        method: "POST",
        headers: {
          "content-type": "application/json",
          accessToken: token,
        },
        body: JSON.stringify(result),
      });
    } else {
      navigate("/login");
    }
  };

  const handlePhotoChanges = (photos) => {
    setPhotos(photos);
  };
  const handleCancelSubmit = () => {
    setBike({});
    navigate("/");
  };
  return (
    <PageWrapper>
      <Photos setPhotos={handlePhotoChanges} />
      {error && <Modal message={error} isOpen={true} />}

      {/* title */}
      <form>
        <div>
          <p className="text-xl font-semibold text-text">Title</p>
          <Input
            className="mb-3  md:w-1/2 border-2 w-full p-2 rounded-md"
            name="Title"
            placeHolder="e.g black racing bike"
            onChange={(value) => setBike({ ...bike, title: value })}
          />
        </div>
        {/* description */}
        <div>
          <p className="text-xl font-semibold text-text">Describe your bike</p>
          <textarea
            className="h-40 w-full border-2 border-gray-100 rounded-md p-2"
            placeholder="e.g i use for 2 years still good as new "
            onChange={(e) => setBike({ ...bike, description: e.target.value })}
          />
        </div>
        <div className="mx-auto md:w-3/4 my-5">
          {/* category */}
          <div className="my-3 md:flex justify-between">
            <p className="text-xl font-semibold text-text md:w-32">Category</p>
            <Select
              path="/category"
              filterName="Select a category"
              onChange={(e) => setBike({ ...bike, category: e.target.value })}
            />
          </div>
          {/* brand */}
          <div className="my-3 md:flex justify-between">
            <p className="text-xl font-semibold text-text md:w-32">Brand</p>
            <Select
              path="/brand"
              filterName="Select a brand"
              onChange={(e) => setBike({ ...bike, brand: e.target.value })}
            />
          </div>
          {/* condition */}
          <div className="my-3 md:flex justify-between">
            <p className="text-xl font-semibold text-text md:w-32">Condition</p>
            <Select
              path="/condition"
              filterName="Select a condition"
              onChange={(e) => setBike({ ...bike, condition: e.target.value })}
            />
          </div>
          {/* type */}
          <div className="my-3 md:flex justify-between">
            <p className="text-xl font-semibold text-text md:w-32">Bike Type</p>
            <Select
              path="/type"
              filterName="Select a type"
              onChange={(e) => setBike({ ...bike, type: e.target.value })}
            />
          </div>
          {/* frameHight*/}
          <div className="my-3 md:flex justify-between">
            <p className="text-xl font-semibold text-text md:w-32">
              Frame Hight
            </p>
            <Select
              path="/frameheight"
              filterName="Select a frame hight"
              onChange={(e) =>
                setBike({ ...bike, frameHeight: e.target.value })
              }
            />
          </div>
          {/* wheelsSize */}
          <div className="my-3 md:flex justify-between">
            <p className="text-xl font-semibold text-text md:w-32">
              Wheel Size
            </p>
            <Select
              path="/wheelSize"
              filterName="Select a wheel size"
              onChange={(e) => setBike({ ...bike, wheelsSize: e.target.value })}
            />
          </div>
        </div>
        <div className="w-4/5 mx-auto my-10">
          {/* price */}
          <div className="my-3 md:flex justify-between ">
            <p className="text-xl font-semibold text-text w-28">Price</p>
            <Input
              className="mb-3 md:w-1/2 border-2 w-full p-2 rounded-md"
              name="price"
              placeHolder="Enter the price of amount"
              onChange={(value) => setBike({ ...bike, price: +value })}
            />
          </div>
          {/*featured*/}
          <div className="my-3 md:flex justify-between">
            <p className="text-xl font-semibold text-text w-28">Featured</p>
            <div className="md:w-1/2 w-full border-2 p-2 rounded-md">
              <input
                type="checkbox"
                id="featuredBike"
                name="featuredBike"
                onChange={(e) =>
                  setBike({ ...bike, featured: e.target.checked })
                }
              />
              <label
                className="text-md text-gray-600 ml-2"
                htmlFor="featuredBike"
              >
                Add your bike to home page
              </label>
            </div>
          </div>
          {/*sellFaster*/}
          <div className="my-3 md:flex justify-between ">
            <p className="text-xl font-semibold text-text md:w-28">
              Sell your bike faster
            </p>
            <div className="md:w-1/2 w-full border-2 p-2 rounded-md">
              <input
                type="checkbox"
                id="sellFaster"
                name="sellFaster"
                onChange={(e) =>
                  setBike({
                    ...bike,
                    sellFaster: e.target.checked,
                  })
                }
              />
              <label
                className="text-md text-gray-600 ml-2"
                htmlFor="sellFaster"
              >
                Add fast sell label your bike
              </label>
            </div>
          </div>

          {/* address container */}
          <div>
            {/* city */}
            <div className="my-3 md:flex justify-between">
              <p className="text-xl font-semibold text-text md:w-40">City</p>
              <Input
                className="md:w-1/2 border-2 w-full p-2 rounded-md"
                name={"city"}
                placeHolder={"Enter your city name"}
                onChange={(value) => setAddress({ ...address, city: value })}
              />
            </div>
            {/* street */}
            <div className="my-3 md:flex justify-between">
              <p className="text-xl font-semibold text-text md:w-40">Street</p>
              <Input
                className="md:w-1/2 border-2 w-full p-2 rounded-md"
                name={"street"}
                placeHolder={"Enter your street name"}
                onChange={(value) => setAddress({ ...address, street: value })}
              />
            </div>
            {/* house number */}
            <div className="my-3 md:flex justify-between">
              <p className="text-xl font-semibold text-text md:w-40">
                House Number
              </p>
              <Input
                className="md:w-1/2 border-2 w-full p-2 rounded-md"
                name={"house-number"}
                placeHolder={"Enter your house number"}
                onChange={(value) =>
                  setAddress({ ...address, houseNumber: +value })
                }
              />
            </div>
            {/* suffix */}
            <div className="my-3 md:flex justify-between">
              <p className="text-xl font-semibold text-text md:w-40">Suffix</p>
              <Input
                className="md:w-1/2 border-2 w-full p-2 rounded-md"
                name={"house-number"}
                placeHolder={"Enter your suffix (Optional)"}
                onChange={(value) => setAddress({ ...address, suffix: value })}
              />
            </div>
            {/* postcode */}
            <div className="my-3 md:flex justify-between">
              <p className="text-xl font-semibold text-text md:w-40">
                Postcode
              </p>
              <Input
                className="md:w-1/2 border-2 w-full p-2 rounded-md"
                name={"post-code"}
                placeHolder={"Enter your postcode"}
                onChange={(value) =>
                  setAddress({ ...address, postcode: value })
                }
              />
            </div>
          </div>
        </div>
        {isLoading && <Loading />}
        <div className="flex justify-end m-8 md:mr-[5rem]">
          <div className="mr-[2.5rem]">
            <Button
              text={"Cancel Ad"}
              onClick={handleCancelSubmit}
              classes={
                "bg-white text-primary border-solid border-[1px] border-primary rounded shadow-sm "
              }
            />
          </div>
          <div className="">
            <Button
              text={" Publish Ad"}
              onClick={handleSubmit}
              classes={"rounded shadow-md "}
            />
          </div>
        </div>
      </form>
    </PageWrapper>
  );
};

export default Ads;
