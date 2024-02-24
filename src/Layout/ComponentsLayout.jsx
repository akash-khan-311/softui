import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../components/Navbar";

const ComponentsLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 relative z-30 md:ml-64 duration-300 overflow-x-hidden overflow-y-auto">
          <div className=" container mx-auto xl:p-20 lg:p-10 md:p-8 p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsLayout;
