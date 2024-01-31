import { Box, Card, TextField, Button } from "@mui/material";
import { useState } from "react";
import styless from "../Auth.module.scss";
import { allUsers } from "../../../DummyData/UserData";
const SingUp = ({
  setIsSignUp,
}: {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;

}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [college, setCollege] = useState("");
  const [semister, setSemister] = useState("");
  const [branch, setBranch] = useState("");



  const singUpFormSubmit = (e:any ) => {
    console.log('singUpFormSubmit e',e)

    
  }


  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form className={styless["singupForm"]}  onSubmit={(e) => singUpFormSubmit(e)}>
        <h1>Sing Up Form</h1>
        <TextField
          id="outlined-basic"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
<br />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="outlined"
        />
<br />
        <TextField
          id="outlined-basic"
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          variant="outlined"
        />
<br />
        <TextField
          id="outlined-basic"
          label="College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          variant="outlined"
        />
<br />
<TextField
          id="outlined-basic"
          label="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          variant="outlined"
        />
<br />
        <TextField
          id="outlined-basic"
          label="Semister"
          value={semister}
          onChange={(e) => setSemister(e.target.value)}
          variant="outlined"
        />
        <br />
        <Button variant="contained" type="submit" color="success">
          sign up
        </Button>

        <br />

        <span>
          already have an account ?
          <Button onClick={() => setIsSignUp(false)} variant="text">
            Sing In
          </Button>
        </span>
      </form>
    </Box>
  );
};

export default SingUp;
