import { Box } from "@mui/material";


import { useState } from "react";
import SingUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import HomePage from "../Home/HomePage";

const Auth = () => {
  const [isSingUp, setIsSignUp] = useState(false);
  const [isonPage, setIsOnPage] = useState(true);


  return (
    <div>
      <Box>
        
      {isonPage ? (
          <HomePage setIsOnPage={setIsOnPage} />
        ) : isSingUp ? (
          <SingUp setIsSignUp={setIsSignUp} />
        ) : (
          <SignIn setIsSignUp={setIsSignUp} />
        )}
      </Box>
    </div>
  );
};

export default Auth;
