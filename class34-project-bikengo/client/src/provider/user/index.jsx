import React, { createContext, useState, useEffect } from "react";

import PropTypes from "prop-types";
import useLocalStorage from "../../hooks/useLocalStorage";
export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [localUser, setLocalUser] = useState(null);
  const { user, isLoading, error } = useLocalStorage();

  useEffect(() => setLocalUser({ ...user }), [user]);

  return (
    <userContext.Provider value={{ localUser, setLocalUser, isLoading, error }}>
      {children}
    </userContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
