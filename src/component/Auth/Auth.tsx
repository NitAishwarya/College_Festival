import { Box } from "@mui/material";


import { useState } from "react";
import SingUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

const Auth = () => {
  const [isSingUp, setIsSignUp] = useState(false);

  return (
    <div>
      <Box>
        
        {isSingUp ? (
          <SingUp setIsSignUp={setIsSignUp}  />
        ) : (
          <SignIn setIsSignUp={setIsSignUp}  />
        )}
      </Box>
    </div>
  );
};

export default Auth;
