import React from "react";
import CardComp from "../CardComp/CardComp";
import { Box } from "@mui/material";

const EventComp = () =>{
    const [isActiveStep, setIsActiveStep] = React.useState(false);
    return(
           <div>
            <Box>
        
        {/* {isActiveStep ?(
          <CardComp setIsActiveStep={setIsActiveStep} title="Numbers of Student Enrolled" count="145" />
        )} */}
      </Box>
           </div>
    )
}

export default EventComp;