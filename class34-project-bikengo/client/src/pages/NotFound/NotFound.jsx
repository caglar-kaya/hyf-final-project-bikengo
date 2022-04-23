import React from "react";
import Button from "../../components/button/Button";

const NotFound = () => {
  return (
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img
        className="h-96 w-full md:w-3/4 mb-10 object-contain object-center rounded"
        alt="404"
        src="https://media.istockphoto.com/vectors/funny-404-design-template-with-a-cyclist-falling-from-a-bicycle-of-vector-id1287429074?k=20&m=1287429074&s=170667a&w=0&h=tfmCC1C2RwuowLiQtuq9qp7447r4rOVPbXhoYdZqnfE="
      />
      <div className="text-center lg:w-2/3 w-full">
        <div className="flex justify-center space-x-5">
          <Button text="Go to the home page" />
          <Button text="Login" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
