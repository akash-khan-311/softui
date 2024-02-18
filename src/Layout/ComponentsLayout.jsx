import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../components/Navbar";

const ComponentsLayout = () => {
    return (
        <>
            <Navbar/>
         <div className="relative flex">
            <Sidebar/>
            <div className="flex-1">
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
       
    );
};

export default ComponentsLayout;