import { SetStateAction, useContext, useEffect, useRef, useState } from "react";

import Header from "../../Module/Header/Header";
import { userContext } from "../../Main/Main";
import { Button } from "@mui/material";
import CardComp from "../../Module/CardComp/CardComp";
import ColgEvent from "../../Module/Event/ColgEvent/ColgEvent";
import EventComp from "../../Module/Event/Event";
import EventPage from "../EventPage/EventPage";
import HeaderComp from "../../Module/Header/Header";

const College = () => {

  const [whichPage, setWhichPage] = useState('List of Events')
  const CollegePage = [
    "Home",
    "List of Events",
    "Number of Students Participated",
    "Setting",
  ];
  const myRef = useRef<any>("");
  const elem = document.getElementById("par-div");
  useEffect(() => {
    console.log("myRef", myRef?.current.style);
    console.log("elem", elem);
  }, [myRef]);

const changePage=(page : string)=>{
  setWhichPage(page);
}



  return (
    <>
     <HeaderComp pages={CollegePage} changePage={changePage}/>
     
     {
      whichPage !== 'List of Events' &&(
        <>
        <h1> List Of Events </h1>
        </>
      )
     }
     {
      whichPage === 'List of Events' && <EventPage />
     }

    </>
  );
};

export default College;
