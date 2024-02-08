import { useState } from "react";
import HeaderComp from "../../Module/Header/Header";
import TableComp from "../../Module/TableComp/TableComp";

const Student = ({ msg }: { msg: string }) => {
  const [whichPage, setWhichPage] = useState("users");
  const StudentPage = ["Home", "Participated Events", "Dates", "Setting"];

  const changePage = (page: string) => {
    setWhichPage(page);
  };
  return (
    <div>
      <HeaderComp pages={StudentPage} changePage={changePage} />
      <TableComp    
      
      />
    </div>
  );
};

export default Student;
