import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import { userContext } from "../../provider/user";
import Error from "../../components/error/Error";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading";

const UserProfile = () => {
  const { localUser, setLocalUser } = useContext(userContext);
  const [path, setPath] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const onSuccess = (data) => {
    setLocalUser({
      ...data.user,
    });
    if (data.accessToken) {
      localStorage.setItem("user", data.accessToken);
    }
    alert("Profile updated successfully");
  };

  const onButtonClick = () => {
    const data = {
      user: {
        firstName: loggedUser.firstName,
        lastName: loggedUser.lastName,
        password: loggedUser.password,
        address: userAddress,
      },
    };
    performFetch({
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    path,
    onSuccess
  );

  useEffect(() => {
    if (localUser) {
      setPath(`/user/${localUser._id}`);
      const { username, email, firstName, lastName, phone } = localUser;
      setLoggedUser({ username, firstName, lastName, phone, email });
      setUserAddress({ ...localUser.address });
    }
    return cancelFetch;
  }, [localUser]);

  return (
    <PageWrapper>
      {loggedUser ? (
        <>
          <h1 className="text-2xl text-gray-700">My Profile</h1>
          <div className="py-4 space-y-2">
            <div className="flex flex-col md:flex-row md:justify-between">
              {/* User detail */}
              <div className="bg-gray-100 p-2 rounded-md my-2 md:w-96">
                <h1 className="px-5 py-2 bg-gray-200 flex justify-center rounded text-text font-semibold tracking-wide text-lg">
                  User Detail
                </h1>
                {/* First name */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    First name
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="text"
                    name="firstName"
                    placeHolder="Enter your first name"
                    value={loggedUser.firstName ? loggedUser.firstName : ""}
                    onChange={(value) =>
                      setLoggedUser({ ...loggedUser, firstName: value })
                    }
                  />
                </div>
                {/* Last name */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    Last name
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="text"
                    name="lastName"
                    placeHolder="Enter your last name"
                    value={loggedUser.lastName ? loggedUser.lastName : ""}
                    onChange={(value) =>
                      setLoggedUser({ ...loggedUser, lastName: value })
                    }
                  />
                </div>

                {/* Phone number */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    Phone number
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="text"
                    name="phone"
                    placeHolder="Enter your phone number"
                    value={loggedUser.phone ? loggedUser.phone : ""}
                    onChange={(value) =>
                      setLoggedUser({ ...loggedUser, phone: value })
                    }
                  />
                </div>
              </div>

              {/* User Credential */}
              <div className="bg-gray-100 p-2 rounded-md my-2 md:w-96">
                <h1 className="px-5 py-2 bg-gray-200 flex justify-center rounded text-text font-semibold tracking-wide text-lg">
                  User Credential
                </h1>
                {/* username */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    Username
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="text"
                    name="username"
                    placeHolder="Enter your username"
                    value={loggedUser.username ? loggedUser.username : ""}
                    onChange={(value) =>
                      setLoggedUser({ ...loggedUser, username: value })
                    }
                  />
                </div>
                {/* email */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    Email
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="email"
                    name="email"
                    placeHolder="Enter your email"
                    value={loggedUser.email ? loggedUser.email : ""}
                    onChange={(value) =>
                      setLoggedUser({ ...loggedUser, email: value })
                    }
                  />
                </div>
                {/* password */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    Password
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="password"
                    name="password"
                    placeHolder="Enter your password"
                    onChange={(value) =>
                      setLoggedUser({ ...loggedUser, password: value })
                    }
                  />
                </div>
              </div>

              {/* location container */}
              <div className="bg-gray-100 p-2 rounded-md my-2 md:w-96">
                <h1 className="px-5 py-2 bg-gray-200 flex justify-center rounded text-text font-semibold tracking-wide text-lg">
                  Address
                </h1>
                {/* city */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    City
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="text"
                    name="city"
                    placeHolder="Enter your city"
                    value={userAddress.city ? userAddress.city : ""}
                    onChange={(value) =>
                      setUserAddress({ ...userAddress, city: value })
                    }
                  />
                </div>
                {/* Street */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    Street
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="text"
                    name="street"
                    placeHolder="Enter your street"
                    value={userAddress ? userAddress.street : ""}
                    onChange={(value) =>
                      setUserAddress({ ...userAddress, street: value })
                    }
                  />
                </div>
                {/* House number */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    House number
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="text"
                    name="houseNumber"
                    placeHolder="Enter your house number"
                    value={userAddress ? userAddress.houseNumber : ""}
                    onChange={(value) =>
                      setUserAddress({ ...userAddress, houseNumber: value })
                    }
                  />
                </div>
                {/* Postcode */}
                <div className="flex flex-col space-y-2">
                  <label className="text-lg tracking-wide text-gray-500">
                    Postcode
                  </label>
                  <Input
                    className="px-4 py-1 border-[1px] border-green-300 rounded-md w-full"
                    type="text"
                    name="postcode"
                    placeHolder="Enter your postcode"
                    value={userAddress ? userAddress.postcode : ""}
                    onChange={(value) =>
                      setUserAddress({ ...userAddress, postcode: value })
                    }
                  />
                </div>
              </div>
            </div>

            {error && <Error message={error} />}
            {isLoading && <Loading />}

            <Button
              text={"Save"}
              className="profile-btn "
              fullSize={true}
              onClick={onButtonClick}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </PageWrapper>
  );
};

export default UserProfile;
