
import StudEvent from "../../Module/Event/StudeEven/StudEvent";
import Header from "../../Module/Header/Header";


const Student = () => {
    const StudentPage = ["Home","Participated Events", "Dates", "Setting"];

    return (
        <div>
            
            <Header pages={StudentPage} />

            <StudEvent />
        </div>
    )
};

export default Student;