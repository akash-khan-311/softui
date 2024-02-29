import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Drawer2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };
  
    return(
        <>
     <CodeBox stringCode={`import { useState } from 'react';
const Drawer = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
    return (
        <>
        {/* Drawer Button */}
        <button onClick={toggleDrawer} className="text-white font-medium text-base inline-block outline-none  cursor-pointer  transition-shadow bg-gradient-to-br from-red-300 to-red-700 hover:from-red-400 hover:to-red-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-8 py-3">Left Side</button>
        <div className="relative">
          {/* Drawer */}
          <div className={\`fixed  top-0 right-0 bottom-0 z-50 bg-red-900 text-white p-6 w-64 transition-transform transform \${isOpen ? 'translate-x-0' : 'translate-x-full'}\`}>
          <button onClick={()=>setIsOpen(false)} className='absolute top-0 right-0 fill-white p-4 inline-block'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
          </button>
            <h1 className="text-3xl font-semibold">Soft UI</h1>
            <ul className="mt-2">
              <li className="mb-2"><a href="#!" className="block hover:text-indigo-400">Option 1</a></li>
              <li className="mb-2"><a href="#!" className="block hover:text-indigo-400">Option 2</a></li>
              <li className="mb-2"><a href="#!" className="block hover:text-indigo-400">Option 3</a></li>
            </ul>
          </div>

          {/* Overlay */}
          {isOpen && <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-10" onClick={toggleDrawer}></div>}

        </div>
        </>
    )
}     
export default Drawer;
`}>
  {/* Drawer Button */}
  <div className="flex justify-center">
  <button onClick={toggleDrawer} className="text-white font-medium text-base inline-block outline-none  cursor-pointer  transition-shadow bg-gradient-to-br from-red-300 to-red-700 hover:from-red-400 hover:to-red-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-8 py-3">Right Side</button>
  </div>
  
</CodeBox>
<div className="relative">


  {/* Drawer */}
  <div className={`fixed  top-0 right-0 bottom-0 z-50 bg-red-900 text-white p-6 w-64 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
  <button onClick={()=>setIsOpen(false)} className='absolute top-0 right-0 fill-white p-4 inline-block'>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
</svg>
  </button>
    <h1 className="text-3xl font-semibold">Soft UI</h1>
    <ul className="mt-2">
      <li className="mb-2"><a href="#!" className="block hover:text-indigo-400">Option 1</a></li>
      <li className="mb-2"><a href="#!" className="block hover:text-indigo-400">Option 2</a></li>
      <li className="mb-2"><a href="#!" className="block hover:text-indigo-400">Option 3</a></li>
    </ul>
  </div>

  {/* Overlay */}
  {isOpen && <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-10" onClick={toggleDrawer}></div>}

</div></>
    )
}
export default Drawer2;