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
  "Hero",
  "Input",
  "Slider",
  "Modal",
  "Navbar",
  "Pagination",
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
      className={` components-sidebar backdrop-blur-xl bg-white/10 fixed top-16 z-[10] -translate-x-full md:translate-x-0  w-[240px] select-none px-2 block transition-all overflow-y-scroll 
      `}
    >
      <div className="flex h-full w-full flex-col space-y-2">
        {/* docs container */}
        <div className="flex flex-col px-4 pt-10 text-lg text-white ">
          <div onClick={handleDocNavOpen} className="text-2xl">
            <div className="flex justify-between items-center border px-4 py-2 rounded-md ">
              <div className="flex items-center ">
                <FaAngleDown
                  className={`transition-all text-sm mr-3 duration-300 ease-in-out text-yellow-900  ${
                    docOpen ? "rotate-180" : "rotate-0"
                  }`}
                />

                <span className="text-sm leading-2 tracking-wide">
                  Getting Started
                </span>
              </div>
              <MdMenuBook className="text-sm" />{" "}
            </div>

            <div
              className={`transition-all duration-300 ease-in-out grid ml-3  ${
                docOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : " grid grid-rows-[0fr] opacity-0"
              } `}
            >
              <div className="my-2 flex flex-col  overflow-hidden  text-lg space-y-3">
                <Link
                  className="px-2 text-gray-400 duration-300 text-sm leading-2 tracking-wide   hover:text-white border-l-2 border-transparent hover:border-l-2 hover:border-l-orange-500"
                  to={"/"}
                >
                  Introduction
                </Link>
                <Link
                  className="px-2  text-gray-400 duration-300  text-sm leading-2 tracking-wide  hover:text-white border-l-2 border-transparent hover:border-l-2 hover:border-l-orange-500"
                  to="/"
                >
                  Quick Start
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* components container */}
        <div className="flex flex-col px-4 text-lg ">
          <div onClick={handleComponentNavOpen} className="text-2xl">
            <div className="flex justify-between items-center border px-4 py-2 rounded-md overflow-hidden">
              <div className="flex items-center ">
                <FaAngleDown
                  className={`transition-all text-sm duration-300 mr-3 ease-in-out text-yellow-900  ${
                    componentOpen ? "rotate-180" : "rotate-0"
                  }`}
                />

                <span className="text-sm leading-2 tracking-wide text-white">
                  Components
                </span>
              </div>
              <RiSettings4Fill className=" text-sm text-white" />{" "}
            </div>

            <div
              className={`transition-all duration-300 ease-in-out grid ml-3  ${
                componentOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : " grid grid-rows-[0fr] opacity-0"
              } `}
            >
              <div className="my-2 flex flex-col overflow-hidden text-sm space-y-3 ">
                {componentsItems.map((ItemName, i) => (
                  <NavLink
                    onClick={handleLink}
                    key={i}
                    className="px-2 text-gray-400 duration-300  hover:text-white border-l-2 border-transparent hover:border-l-2 hover:border-l-orange-500"
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
