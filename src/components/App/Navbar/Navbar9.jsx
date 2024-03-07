import  { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Navbar9 = () => {
  const [open, setOpen] = useState(false);

  return (
  <CodeBox>
      
<div>
  <nav className="bg-white dark:bg-gray-800  ">
    <div className="px-8 mx-auto max-w-7xl">
      <div className="flex items-center justify-between h-16">
        <div className="flex justify-between items-center">
          <a className="flex-shrink-0 text-2xl md:text-3xl lg:text-4xl font-bold" href="#!">
          Soft <span className="text-blue-600 dark:text-blue-500">UI</span>
          </a>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <a className="text-black transition-all duration-300 hover:text-light-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#!">
                Home
              </a>
              <a className="text-black dark:text-white  transition-all duration-300 hover:text-light-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#!">
                Gallery
              </a>
              <a className="text-black transition-all duration-300 hover:text-light-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#!">
                Content
              </a>
              <a className="text-black transition-all duration-300 hover:text-light-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#!">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex -mr-2 md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-800 w-10 h-10 md:w-16 md:h-16 dark:text-white hover:text-black inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
            <svg width={20} height={20} fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className={`transition-all duration-300 ${open ? "block bg-white" : "hidden "} md:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a className="text-black transition-all duration-300 hover:text-light-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#!">
          Home
        </a>
        <a className="text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="#!">
          Gallery
        </a>
        <a className="text-black transition-all duration-300 hover:text-light-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#!">
          Content
        </a>
        <a className="text-black transition-all duration-300 hover:text-light-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#!">
          Contact
        </a>
      </div>
    </div>
  </nav>
</div>


  </CodeBox>
  );
};

export default Navbar9;

