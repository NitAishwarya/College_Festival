import { useContext, useEffect, useRef, useState } from "react";
import { userContext } from "../../Main/Main";
import EventPage from "../EventPage/EventPage";
import HeaderComp from "../../Module/Header/Header";
import EventCard from "../../Module/EventCard/EventCard";

const Admin = ({msg} :{
  msg :string
}) => {
  const [whichPage, setWhichPage] = useState("Events");

  const AdminPage = ["Home", "Events", "Number of Students", "Setting"];

  const myRef = useRef<any>("");
  const elem = document.getElementById("par-div");
  useEffect(() => {
    console.log("myRef", myRef?.current.style);
    console.log("elem", elem);
    if (myRef?.current) {
      myRef.current.style.border = "1px solid green";
    }

    if (elem) {
      elem.style.border = "2px solid blue";
    }
  }, [myRef]);

  const contextData = useContext(userContext);
  console.log("contextData Admin", contextData);

  const changePage = (page: string) => {
    setWhichPage(page);
  };

  console.log("Admin");

  return (
    <>
    
      <HeaderComp pages={AdminPage} changePage={changePage} />
      {whichPage !== "Events" && (
        <>
       
          <div
            ref={myRef}
            style={{
              padding: "50px",
              width: "60%",
              justifyContent: "space-between",
              display: "flex",
              border:'none'
              
            }}
          >
<>
<h1 style={{backgroundColor :'wheat', border :'none'}}>  Home Page </h1>
</>
           

          </div>

         
        </>
      )}
      {whichPage === "Events" &&  (
      <>
      <div style={{margin : "15px 25px"}}>
      <br />
      <EventPage />
      
      </div>

   
      
      </>
      )}

    
    </>
  );
};

export default Admin;
