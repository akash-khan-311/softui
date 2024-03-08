import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Dropdown1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const code = `
import { useState } from "react";
const Dropdown = () => {
   const [isOpen,setIsOpen] = useState(false)
    return(
       <div className="relative inline-block text-left min-h-40">
       <div className="group">
         <button onClick={()=> setIsOpen(!isOpen)} type="button" className="inline-flex justify-center items-center min-w-40 rounded-md px-4 py-2 font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none">
           Open Menu
           {/* Dropdown arrow */}
           <svg className={\`w-4 h-4 ml-2 transition-all duration-300 \${isOpen && 'rotate-180'}  -mr-1\`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
           </svg>
         </button>
         {/* Dropdown menu */}
         <div className={\`absolute left-0 min-w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 transition-all ease-out duration-300 rounded-md \${isOpen ? 'vissble opacity-100' : 'invisible opacity-0'} shadow-lg \`}>
           <div className="py-1">
             <a href="#!" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
             <a href="#!" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
             <a href="#!" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
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
      <CodeBox text={"Dropdown Menu"} stringCode={code}>
        <div className="flex justify-center">
          <div className="relative inline-block text-left min-h-40">
            <div className="group">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex justify-center items-center min-w-40 rounded-md px-4 py-2 font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none"
              >
                Open Menu
                {/* Dropdown arrow */}
                <svg
                  className={`w-4 h-4 ml-2 transition-all duration-300 ${isOpen && "rotate-180"}  -mr-1`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                className={`absolute left-0 min-w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 transition-all ease-out duration-300 rounded-md ${isOpen ? "vissble opacity-100" : "invisible opacity-0"} shadow-lg `}
              >
                <div className="py-1">
                  <a
                    href="#!"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#!"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="#!"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
export default Dropdown1;
