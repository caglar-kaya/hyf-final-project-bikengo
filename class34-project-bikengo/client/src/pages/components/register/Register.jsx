import React, { useState, useEffect, useContext } from "react";
import "./register.css";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../provider/user";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
const Register = () => {
  const navigate = useNavigate();
  const { setLocalUser } = useContext(userContext);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);
  const onSuccess = (data) => {
    setLocalUser({
      id: data.user._id,
      username: data.user.username,
    });
    if (data.accessToken) {
      localStorage.setItem("user", data.accessToken);
    }
    navigate("/");
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/user/create",
    onSuccess
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === confirmPassword) {
      performFetch({
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ user }),
      });
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    <div>
      {error && <Error message={error} />}
      {isLoading ? (
        <Loading />
      ) : (
        <form className="register-container">
          <Input
            type="text"
            className="register-input"
            placeHolder="User Name"
            required
            name="user-name"
            onChange={(value) => setUser({ ...user, username: value })}
          />
          <Input
            type="email"
            className="register-input"
            placeHolder="Email"
            required
            name="user-email"
            onChange={(value) => setUser({ ...user, email: value })}
          />
          <Input
            type="password"
            className="register-input"
            placeHolder="Password"
            required
            name="user-Password"
            onChange={(value) => setUser({ ...user, password: value })}
          />
          <Input
            type="password"
            className="register-input"
            placeHolder="Confirm Password"
            required
            name="user-Confirm-Password"
            onChange={(value) => setConfirmPassword(value)}
          />
          <div className="register-btn">
            <Button text={"Register"} onClick={handleSubmit}></Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
