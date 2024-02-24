import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="relative z-40">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
