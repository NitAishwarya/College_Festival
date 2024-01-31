import { SetStateAction, useContext, useEffect, useRef } from "react";

import Header from "../../Module/Header/Header";
import { userContext } from "../../Main/Main";
import { Button } from "@mui/material";
import CardComp from "../../Module/CardComp/CardComp";
import ColgEvent from "../../Module/Event/ColgEvent/ColgEvent";
import EventComp from "../../Module/Event/Event";

const College = () => {
  const CollegePage = [
    "Home",
    "Number of Events",
    "Number of Students Participated",
    "Setting",
  ];
  const myRef = useRef<any>("");
  const elem = document.getElementById("main-div");
  useEffect(() => {
    console.log("myRef", myRef?.current.style);
    console.log("elem", elem);
  }, [myRef]);

  const contextData = useContext(userContext);
  const changeBorder = () => {
    if (myRef?.current) {
      myRef.current.style.border = "3px solid green";
    }

    if (elem) {
      elem.style.border = "3px solid blue";
    }
  };

  const changeBorder2 = () => {
    if (myRef?.current) {
      myRef.current.style.border = "3px solid blue";
    }
  };
  function setIsActiveStep(value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Header pages={CollegePage} />
      <br />
      <ColgEvent />

      <>
        <div
          ref={myRef}
          style={{
            padding: "40px",
            width: "718px",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <CardComp title="Numbers of Student Enrolled" count="145" />
          <CardComp title="Number of Students Participated" count="105" />
          <CardComp title="Events Timing" count="9:30pm to 7:30pm" />
          <CardComp title="Number of Volunteers" count="50" />

          {/* <EventComp /> */}
        </div>
        <br />
        <Button
          sx={{ marginLeft: "15px", marginRight: "15px" }}
          variant="contained"
          color="success"
          onClick={() => {
            changeBorder();
          }}
        >
          {" "}
          Green Border{" "}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            changeBorder2();
          }}
        >
          {" "}
          Blue Border{" "}
        </Button>
      </>
    </>
  );
};

export default College;
