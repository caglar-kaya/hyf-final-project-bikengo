import React, { useState, useEffect } from "react";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ResultPageMap from "../components/resultPageMap/ResultPageMap";
import { HiLink } from "react-icons/hi";
import Loading from "../../components/loading/Loading";
import { FaMailBulk } from "react-icons/fa";
const DetailPage = () => {
  const { id } = useParams();
  const [bike, setBike] = useState({});
  const [images, setImages] = useState([]);
  const [advertiser, setAdvertiser] = useState(null);
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [address, setAddress] = useState({});
  const [type, setType] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [email, setEmail] = useState("");
  const onSuccess = (data) => {
    setAdvertiser(data.bike.user);
    setImages(data.bike.photos);
    setBrand(data.bike.brand.value);
    setCondition(data.bike.condition.value);
    setType(data.bike.type.value);
    setAddress(data.bike.address);
    setBike(data.bike);
    setEmail(data.bike.user.email);
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    `/bike/${id}`,
    onSuccess
  );
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.href}`);
    alert("Link copied to clipboard");
  };
  useEffect(() => {
    performFetch();
    return () => {
      cancelFetch();
    };
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div className="flex justify-center">
        <div className="w-3/4 h-24 bg-red-200 rounded-md flex flex-col justify-center items-center text-text">
          <h1 className="text-xl font-bold tracking-widest ">Error...</h1>
          <p>
            Sorry we can&#39;t find the bike you are looking for, please try
            again later..
          </p>
        </div>
      </div>
    );
  }
  return (
    <PageWrapper>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-4/5">
          {/* title */}
          <h1 className="font-semibold text-4xl mb-4 tracking-wider text-primary">
            {bike.title}
          </h1>
          {/* image section */}
          <div className="w-full h-96 md:h-[35rem] flex flex-col md:flex-row md gap-2 md:border-r-2 md:border-gray-50">
            <div className="flex-1 justify-center items-center bg-gray-50 rounded-md overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={images[selectedImage]}
                alt={bike.title}
              />
            </div>
            <div className="flex md:flex-col md:mr-5 justify-between gap-x-2">
              {images.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className="w-1/4 md:w-28 h-24 bg-gray-300 rounded-md overflow-hidden hover:shadow-lg shadow-primary"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={bike.title}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:mx-5">
            {/* Brand */}
            <div className="my-2 md:hidden space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">Brand</h3>
              <p className="mx-2 text-gray-600 capitalize">{brand}</p>
            </div>
            {/* Condition */}
            <div className="my-2 md:hidden space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">
                Condition
              </h3>
              <p className="mx-2 text-gray-600 capitalize">{condition}</p>
            </div>

            {/* Type*/}
            <div className="my-2 md:hidden space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">Type</h3>
              <p className="mx-2 text-gray-600 capitalize">{type}</p>
            </div>
            {/* Price */}
            <div className="my-2 md:hidden space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">Price</h3>
              <p className="mx-2 py-2 px-4 text-lg text-text bg-green-200  rounded-md w-fit capitalize">
                {bike.price} €
              </p>
            </div>

            {/* Description */}
            <div className="my-2 space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">
                Description
              </h3>
              <p className="mx-2 text-gray-600 ">{bike.description}</p>
            </div>
            {/* Email */}
            {email && (
              <div className="block md:hidden my-2">
                <h3 className="text-xl md:text-2xl text-text font-bold">
                  Mail Seller
                </h3>
                <p className="mx-2 text-gray-600 capitalize">
                  <a href={`mailto:${email}`}>
                    <FaMailBulk className="w-8 h-8  text-text" />
                  </a>
                </p>
              </div>
            )}
            {/* Address */}
            <div className="my-2 space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">
                Location
              </h3>
              <p className="mx-2 bg-gray-200 rounded-md p-2 text-gray-800 w-fit">{`${address.postcode}, ${address.city}`}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 py-5 mx-2 px-4 md:mt-10 ">
          {/* Advertise by */}
          <div className="my-2">
            <h3 className="text-xl text-text font-bold">Advertised by</h3>
            <div className="mt-2 flex items-center">
              <div className="w-10 h-10 mr-4 bg-gray-300 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.naps.com.au/media/1060/user-icon-placeholder-1.png"
                  alt="avatar"
                />
              </div>
              <h1 className="font-mono tracking-widest text-xl">
                {advertiser ? advertiser.username : "Loading..."}
              </h1>
            </div>
          </div>
          {/* Share Via */}
          <div className="my-2">
            <h3 className="text-xl text-text font-bold">Share Via</h3>
            <div className="mt-2 flex items-center">
              <div
                onClick={handleCopyLink}
                className="w-12 h-12 flex justify-center items-center mr-4 bg-gray-100 rounded-full hover:shadow-md shadow-primary"
              >
                <HiLink className="w-8 h-8 text-gray-600" />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Brand */}
            <div className="my-2 space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">Brand</h3>
              <p className="mx-2 text-gray-600 capitalize">{brand}</p>
            </div>
            {/* Condition */}
            <div className="my-2 space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">
                Condition
              </h3>
              <p className="mx-2 text-gray-600 capitalize">{condition}</p>
            </div>
            {/* Email */}
            {email && (
              <div className="my-2">
                <h3 className="text-xl md:text-2xl text-text font-bold">
                  Mail Seller
                </h3>
                <p className="mx-2 text-gray-600 capitalize">
                  <a href={`mailto:${email}`}>
                    <FaMailBulk className=" w-8 h-8 text-text" />
                  </a>
                </p>
              </div>
            )}
            {/* Type*/}
            <div className="my-2 space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">Type</h3>
              <p className="mx-2 text-gray-600 capitalize">{type}</p>
            </div>
            {/* Price */}
            <div className="my-2 space-y-2">
              <h3 className="text-xl md:text-2xl text-text font-bold">Price</h3>
              <p className="mx-2 py-2 px-4 text-lg text-text bg-green-200 rounded-md w-fit capitalize">
                € {bike.price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ResultPageMap bikeResult={[bike]} />
    </PageWrapper>
  );
};

export default DetailPage;
