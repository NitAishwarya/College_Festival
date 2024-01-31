import React, { useState } from "react";

import Auth from "../Auth/Auth";
import Admin from "../features/Admin/Admin";

import Student from "../features/Student/Student";
import College from "../features/College/College";

export const userContext = React.createContext<any>({});

const Main = () => {
  const [loginUser, setLoginUser] = useState<any>({});
  const [userData, setUserData] = useState<any>("user");

  const providerObj = { loginUser, setLoginUser, userData, setUserData };
  return (
    <userContext.Provider value={providerObj}>
      {Object.keys(loginUser).length === 0 && <Auth />}
      {loginUser.userType == "admin" && <Admin />}
      {loginUser.userType == "student" && <Student />}
      {loginUser.userType == "college" && <College />}
    </userContext.Provider>
  );
};

export default Main;
