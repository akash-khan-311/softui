import { FaAngleDown } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [docOpen, seDocOpen] = useState(true);
  const [componentOpen, setComponentOpen] = useState(true);

  return (
    <div className=" fixed z-40  w-[300px]  select-none overflow-y-scroll">
      <div className="group flex h-full w-full flex-col space-y-6">
        {/* components container */}
        <div className="flex flex-col px-4 pt-10 text-lg text-white ">
          <div onClick={() => seDocOpen(!docOpen)} className="text-2xl">
            <div className="flex justify-between items-center border px-4 py-2 rounded-md">
              <div className="flex items-center ">
                <MdMenuBook className="mr-3 text-3xl" /> <span>Docs</span>
              </div>
              <FaAngleDown className={`transition-all duration-300 ease-in-out  ${docOpen ? 'rotate-180' : 'rotate-0'}`}/>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out grid ml-3  ${
                docOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : " grid grid-rows-[0fr] opacity-0"
              } `}
            >
              <div className="my-2 flex flex-col space-y-1 overflow-hidden border-l border-yellow-900 text-lg px-4">
                <Link
                  className="px-4 py-2 text-white duration-300 rounded-md hover:bg-yellow-900 hover:text-white"
                  to={"/"}
                >
                  Introduction
                </Link>
                <Link
                  className="px-4 py-2 text-white duration-300 rounded-md hover:bg-yellow-900 hover:text-white"
                  to="/"
                >
                  Quick Start
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Sidebar;
