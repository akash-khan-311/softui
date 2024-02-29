import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../components/Navbar";

const ComponentsLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 relative  xl:ml-64 duration-300 overflow-x-hidden overflow-y-auto">
          <div className=" max-w-8xl  mx-auto xl:p-10 lg:p-5 mt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsLayout;
