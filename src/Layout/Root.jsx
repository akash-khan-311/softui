import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="relative z-30 ">
      <Navbar />
      <div className="lg:px-0 px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
