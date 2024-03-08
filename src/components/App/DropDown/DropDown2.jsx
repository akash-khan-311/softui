import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const code = `
import { useState } from "react";

const Dropdown = () => {

   const [isOpen,setIsOpen] = useState(false)

    return(
        <div className="relative  inline-block overflow-hidden text-left min-h-40">
            <div className="group bg-yellow-400 ">
              <button
                onClick={() => setIsOpen(!isOpen)} type="button"
                className="inline-flex   justify-center items-center min-w-40  px-4 py-2 font-medium text-black  bg-white focus:outline-none"
              >
                Open Menu
                {/* Dropdown arrow */}
                <svg
                  className={\`w-4 h-4 ml-2 transition-transform duration-300 ${isOpen && "rotate-180"}  -mr-1\`}
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div
                className={\`absolute  left-0 min-w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 transition-all -z-10 ease-in-out duration-300 ${isOpen ? " translate-y-0" : "-translate-y-40 "} shadow-lg \`}
              >
                <div className="py-1">
                  <a
                    href="#!" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#!" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="#!" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            </div>
          </div>
    )
}
 export default Dropdown;
`;
  return (
    <>
      <CodeBox text={"Animation With Dropdown Menu"} stringCode={code}>
        <div className="flex justify-center ">
          <div className="relative  inline-block overflow-hidden text-left min-h-40">
            <div className="group bg-yellow-400 ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex   justify-center items-center min-w-40  px-4 py-2 font-medium text-black  bg-white focus:outline-none"
              >
                Open Menu
                {/* Dropdown arrow */}
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${isOpen && "rotate-180"}  -mr-1`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                className={`absolute  left-0 min-w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 transition-all -z-10 ease-in-out duration-300  ${isOpen ? " translate-y-1" : "-translate-y-40 "} shadow-lg `}
              >
                <div className="py-1">
                  <a
                    href="#!"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#!"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="#!"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};
export default Dropdown2;
