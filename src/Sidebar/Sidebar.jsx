/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const componentsItems = [
  "Avatar",
  "Accordion",
  "Button",
  "Carousel",
  "Checkbox",
  "Card",
  "Form",
  "Footer",
  "Input",
  "Slider",
  "Modal",
  "Navbar",
];

const Sidebar = () => {
  const [docOpen, setDocOpen] = useState(false);
  const [componentOpen, setComponentOpen] = useState(true);

  const handleComponentNavOpen = () => {
    setComponentOpen(!componentOpen);
  };

  const handleDocNavOpen = () => {
    setDocOpen(!docOpen);
  };
  const handleLink = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`components-sidebar fixed top-16  z-[80]  w-[300px] select-none px-6 block transition-all  overflow-y-scroll 
      `}
    >
      <div className=" flex h-full w-full flex-col space-y-2  ">
        {/* docs container */}
        <div className="flex flex-col px-4 pt-10 text-lg text-white ">
          <div onClick={handleDocNavOpen} className="text-2xl">
            <div className="flex justify-between items-center border px-4 py-2 rounded-md ">
              <div className="flex items-center ">
                <MdMenuBook className="mr-3 text-xl" />{" "}
                <span className="text-lg">Docs</span>
              </div>
              <FaAngleDown
                className={`transition-all duration-300 ease-in-out text-yellow-900  ${
                  docOpen ? "rotate-180" : "rotate-0"
                }`}
              />
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
        {/* components container */}
        <div className="flex flex-col px-4 text-lg text-white ">
          <div onClick={handleComponentNavOpen} className="text-2xl">
            <div className="flex justify-between items-center border px-4 py-2 rounded-md overflow-hidden">
              <div className="flex items-center ">
                <RiSettings4Fill className="mr-3 text-xl" />{" "}
                <span className="text-lg">Components</span>
              </div>
              <FaAngleDown
                className={`transition-all duration-300 ease-in-out text-yellow-900  ${
                  componentOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`transition-all duration-300 ease-in-out grid ml-3  ${
                componentOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : " grid grid-rows-[0fr] opacity-0"
              } `}
            >
              <div className="my-2 flex flex-col space-y-1 overflow-hidden border-l border-yellow-900 text-lg px-4">
                {componentsItems.map((ItemName, i) => (
                  <NavLink
                    onClick={handleLink}
                    key={i}
                    className="px-4 py-2 text-white duration-300 rounded-md hover:bg-yellow-900 hover:text-white"
                    to={ItemName.toLocaleLowerCase()}
                  >
                    {ItemName}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
