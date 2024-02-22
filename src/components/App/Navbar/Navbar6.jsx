import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Navbar6 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLists = [
    { name: "Home" },
    { name: "Service" },
    { name: "Blog" },
    { name: "Contact" },
  ];
  return (
    <>
      <CodeBox text={'Responsive Navbar'} stringCode={`
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLists = [
    { name: "Home" },
    { name: "Service" },
    { name: "Blog" },
    { name: "Contact" },
  ];
  
  return (
    <div className="shadow-md w-full">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="cursor-pointer">
          <span className="text-4xl font-bold text-gray-800">
            Aero <span className="text-orange-600">UI</span>
          </span>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? (
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#0F0F0F"
              />
            </svg>
          ) : (
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
        <ul
          className={\`md:flex md:items-center md:pb-0 md:pt-0 pt-4 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in \${isOpen ? " md:translate-y-0 translate-y-3 opacity-100" : " -translate-y-full  md:translate-y-0"} md:opacity-100 opacity-0\`}
        >
          {navLists.map((items) => (
            <li
              className="transition-all ease-in-out duration-150 hover:text-orange-600 text-gray-800 cursor-pointer text-lg md:ml-8 md:my-0 my-4"
              key={items.name}
            >
              {items.name}
            </li>
          ))}
          <button className="text-white font-medium text-base inline-block outline-none md:ml-8 cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-4 py-2">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;`}>
        <div className="shadow-md w-full">
          <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
            <div className="cursor-pointer">
              <span className="text-4xl font-bold text-gray-800">
                Aero <span className="text-orange-600">UI</span>
              </span>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-8 top-6 cursor-pointer md:hidden"
            >
              {isOpen ? (
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                    fill="#0F0F0F"
                  />
                </svg>
              ) : (
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18L20 18"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 md:pt-0 pt-4 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                isOpen
                  ? " md:translate-y-0 translate-y-3 opacity-100"
                  : " -translate-y-full  md:translate-y-0"
              } md:opacity-100 opacity-0`}
            >
              {navLists.map((items) => (
                <li
                  className="transition-all ease-in-out duration-150 hover:text-orange-600 text-gray-800 cursor-pointer text-lg md:ml-8 md:my-0 my-4"
                  key={items.name}
                >
                  {items.name}
                </li>
              ))}
              <button className="text-white font-medium text-base inline-block outline-none md:ml-8 cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-4 py-2">
                Get Started
              </button>
            </ul>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Navbar6;
