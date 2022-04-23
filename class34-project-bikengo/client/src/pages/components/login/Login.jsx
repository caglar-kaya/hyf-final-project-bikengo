import React, { useState, useContext, useEffect } from "react";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import "./login.css";
import { userContext } from "../../../provider/user";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { setLocalUser } = useContext(userContext);

  const onSuccess = (data) => {
    setLocalUser({
      ...data.user,
    });
    if (data.accessToken) {
      localStorage.setItem("user", data.accessToken);
    }
    navigate(-1);
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/user/login",
    onSuccess
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({ user }),
    });
  };

  return (
    <div>
      {error && <Error message={error} />}
      {isLoading ? (
        <Loading />
      ) : (
        <form className="login-container">
          <Input
            name="email"
            type="email"
            className="input-field"
            placeHolder="user email"
            required
            onChange={(value) => setUser({ ...user, email: value })}
          />
          <Input
            name="password"
            type="password"
            className="input-field"
            placeHolder="password"
            required
            onChange={(value) => setUser({ ...user, password: value })}
          />
          <div className="submit-btn">
            <Button text={"login"} onClick={handleSubmit}></Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
