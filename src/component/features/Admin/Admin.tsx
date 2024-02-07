import { useContext, useEffect, useRef, useState } from "react";
import { userContext } from "../../Main/Main";
import EventPage from "../EventPage/EventPage";
import HeaderComp from "../../Module/Header/Header";

const Admin = () => {
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

  return (
    <>
      <HeaderComp pages={AdminPage} changePage={changePage} />
      {whichPage !== "Events" && (
        <>
        <div>
                  <h1> Event Page </h1>
              </div>
              <div
                  ref={myRef}
                  style={{
                      padding: "50px",
                      width: "60%",
                      justifyContent: "space-between",
                      display: "flex",
                  }}
              >

                  </div></>

      )}
       {whichPage === 'Events' && <EventPage />
}
</>
    
  );
};

export default Admin;
