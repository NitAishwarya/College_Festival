import { useState } from "react";
import HeaderComp from "../../Module/Header/Header";

const Student = () => {
  const [whichPage, setWhichPage] = useState("users");
  const StudentPage = ["Home", "Participated Events", "Dates", "Setting"];

  const changePage = (page: string) => {
    setWhichPage(page);
  };
  return (
    <div>
      <HeaderComp pages={StudentPage} changePage={changePage} />
    </div>
  );
};

export default Student;
