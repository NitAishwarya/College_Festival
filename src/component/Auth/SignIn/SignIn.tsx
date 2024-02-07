import axios from "axios";
import { Box, Button, Card, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { userContext } from "../../Main/Main";
import { logedInUser } from "../../../DummyData/UserData";

const SignIn = ({
  setIsSignUp,
}: {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const contextData = useContext(userContext);
  const { setOpenStatus } = useContext(userContext);
  
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const callLogin = (loginObj: any) => {
    axios
      .post("http://localhost:3001/login", loginObj)
      .then((response: any) => {
        const { status, userData } = response.data;
        console.log("response", response);

        if (response.data && status === 200) {
          console.log("userData", userData);
          contextData.setLoginUser(userData);
        } else {
          contextData.setLoginUser({});
        }
      })
      .catch((error: any) => {
        console.log("error", error);
      });
  };

  const login = async () => {
    const loginObj = {
      email,
      password,
    };

    setOpenStatus(true);

    callLogin(loginObj);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <Card
        sx={{
          width: "400px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        variant="outlined"
      >
        <h1>Sign In Form</h1>
        <TextField
          id="outlined-basic"
          label="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          type="password"
        />
        <Button variant="contained" onClick={login} color="success">
          Sing In
        </Button>

        <span>
          do not not Account ?{" "}
          <Button onClick={() => setIsSignUp(true)} variant="text">
            SingUp
          </Button>
        </span>
      </Card>
    </Box>
  );
};

export default SignIn;
