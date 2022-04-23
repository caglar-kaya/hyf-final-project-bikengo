import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useLocalStorage = () => {
  const [user, setUser] = useState(null);
  const onSuccess = (data) => {
    setUser({
      ...data.user,
    });
    localStorage.setItem("user", data.accessToken);
  };
  const path = "/user/authLogin";
  const { isLoading, error, performFetch } = useFetch(path, onSuccess);
  useEffect(() => {
    authenticateUser();
  }, []);

  function authenticateUser() {
    const token = localStorage.getItem("user");

    if (token) {
      performFetch({
        method: "GET",
        headers: {
          "content-type": "application/json",
          accessToken: token,
        },
      });
    }
  }
  return { user, isLoading, error };
};

export default useLocalStorage;
