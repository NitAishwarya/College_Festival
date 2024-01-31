import { Box, Button, Card, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { userContext } from "../../Main/Main";
import { logedInUser } from "../../../DummyData/UserData"





const SignIn = ({
  setIsSignUp,

} : {
  setIsSignUp :  React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const contextData = useContext(userContext);

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const loginObj = {
      userName,
      password,
    };
   
     const userData:any = await logedInUser(userName, password).catch((err: any)=> {
       console.log(err)
       contextData.setLoginUser({})
     });

     if (userData && userData.code === 200) {
      contextData.setLoginUser(userData.data)
    }else{
      alert("User Not Fount");

      contextData.setLoginUser({})
    }


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
        label="userName"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
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
 
// const logedInUser = (userName: string, password: string) => {
//   throw new Error("Function not implemented.");
// }

