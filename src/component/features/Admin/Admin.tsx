import { useContext } from "react";
import { userContext } from "../../Main/Main";
import Header from "../../Module/Header/Header";

const Admin = () => {

    const contextData = useContext(userContext)
    console.log('contextData Admin',contextData)

    const AdminPage = ["Home","Number of Events", "Number of Students Participated", "Setting"];

    return (
        <div>
             <Header pages={AdminPage} />
            
         </div>
    )
};

export default Admin;