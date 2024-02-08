import React, { useState } from "react";

import Auth from "../Auth/Auth";
import Admin from "../features/Admin/Admin";

import Student from "../features/Student/Student";
import College from "../features/College/College";
import ReactDOM from "react-dom";
import AlertComp from "../Module/AlertComp/AlertComp";
import stylees from "./main.module.scss";

export const userContext = React.createContext<any>({});
const mainAlert = document.getElementById("par-div");

const Main = () => {
  const [loginUser, setLoginUser] = useState<any>({});
  const [userData, setUserData] = useState<any>("Events");
  const [openStatus, setOpenStatus] = useState(false);

  const providerObj = {
    loginUser,
    setLoginUser,
    userData,
    setUserData,
    openStatus,
    setOpenStatus,
  };

  const alertmsg =() =>{
    if(loginUser.type == "admin")
    {
   return "Admin Logged in Sucessfully" 
    }
    if(loginUser.type == "student"){
      return "Student Logged in Sucessfully" 
    }
    if(loginUser.type == "college"){
      return "College Logged in Sucessfully" 
    }
    else{
      return "";
    }
  }
  return (
     <div className={stylees['main-div']}>
      <userContext.Provider value={providerObj}>
        {mainAlert &&
          ReactDOM.createPortal(
            <AlertComp
              openStatus={openStatus}
              setOpenStatus={setOpenStatus}
              msg={alertmsg()}
            />,
            mainAlert
          )}
        {Object.keys(loginUser).length === 0 && <Auth />}
        {loginUser.type == "admin" && <Admin msg={alertmsg()}/>}
        {loginUser.type == "student" && <Student msg={alertmsg()}/>}
        {loginUser.type == "college" && <College msg={alertmsg()}/>}
      </userContext.Provider>
    </div>
  );
};

export default Main;
