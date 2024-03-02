import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Drawer4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <CodeBox
        stringCode={`import { useState } from "react";
const Drawer = ()=> {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    }
    return(
        <>
          <button onClick={toggleDrawer} className="text-white font-medium text-base inline-block outline-none  cursor-pointer  transition-shadow bg-gradient-to-br from-green-300 to-green-700 hover:from-green-400 hover:to-green-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-8 py-3">Bottom Side</button>
          <div className="relative">
              {/* Drawer */}
              <div className={\`fixed  w-full left-0 bottom-0 z-50 bg-green-900 text-white p-6 h-44 md:h-52 lg:h-56 overflow-hidden transition-transform duration-500 transform \${isOpen ? 'translate-y-0' : 'translate-y-full'}\`}>
              <button onClick={()=>setIsOpen(false)} className='absolute top-0 right-0 fill-white p-4 inline-block'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
              </button>
                <div className="max-w-4xl mx-auto mt-0 md:mt-8 lg:mt-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl  font-semibold">Soft UI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sit exercitationem. Earum non, ullam deleniti aperiam impedit tenetur rerum placeat! Voluptate, molestiae quos ad dolore possimus quae optio ratione quas.</p>
                </div>

              </div>

              {/* Overlay */}
              {isOpen && <div className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 z-30" onClick={toggleDrawer}></div>}

          </div>
        </>
    )
}     
export default Drawer;       

`}
      >
        <div className="flex justify-center">
          <button
            onClick={toggleDrawer}
            className="text-white font-medium text-base inline-block outline-none  cursor-pointer  transition-shadow bg-gradient-to-br from-green-300 to-green-700 hover:from-green-400 hover:to-green-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-8 py-3"
          >
            Bottom Side
          </button>
        </div>
      </CodeBox>
      <div className="relative">
        {/* Drawer */}
        <div
          className={`fixed  w-full left-0 bottom-0 z-50 bg-green-900 text-white p-6 h-44 md:h-52 lg:h-56 overflow-hidden transition-transform duration-500 transform ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 fill-white p-4 inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 50 50"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          </button>
          <div className="max-w-4xl mx-auto mt-0 md:mt-8 lg:mt-10 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl  font-semibold">
              Soft UI
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              sit exercitationem. Earum non, ullam deleniti aperiam impedit
              tenetur rerum placeat! Voluptate, molestiae quos ad dolore
              possimus quae optio ratione quas.
            </p>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 z-30"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>
    </>
  );
};
export default Drawer4;
