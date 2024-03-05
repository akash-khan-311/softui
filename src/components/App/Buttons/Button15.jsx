import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button15 = () => {
    return(
        <>
             <CodeBox stringCode={`{/* :SMALL BUTTON 3 */}
<button className="m-5 group relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none text-sm text-white font-medium overflow-hidden transition-all duration-200 ease-in transform hover:scale-110 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">Bouton 3
  <span className="absolute -z-1 z-[-1] top-0 left-0 w-full h-full bg-gray-400 transition-all duration-200 ease-in transform group-hover:scale-150 group-hover:rotate-180" aria-hidden="true"/>
</button>

{/* :MEDIUM BUTTON 3 */}
<button className="m-5 group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none text-base text-white font-medium overflow-hidden transition-all duration-200 ease-in transform hover:scale-110 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">Bouton 3
  <span className="absolute -z-1 z-[-1] top-0 left-0 w-full h-full bg-gray-800 transition-all duration-200 ease-in transform group-hover:scale-150 group-hover:rotate-180" aria-hidden="true"/>
</button>

{/* :BIG BUTTON 3 */}
<button className="m-5 group relative inline-flex items-center px-7 py-3.5 rounded shadow-lg outline-none text-lg text-white font-medium overflow-hidden transition-all duration-200 ease-in transform hover:scale-110 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">Bouton 3
  <span className="absolute -z-1 z-[-1] top-0 left-0 w-full h-full bg-gradient-to-br from-gray-400 to-gray-800 transition-all duration-200 ease-in transform group-hover:scale-150 group-hover:rotate-180" aria-hidden="true"/>
</button>`}>
               <div className="flex justify-evenly items-center flex-wrap gap-5">
                 {/* :SMALL BUTTON 3 */}
      <button className="m-5 group relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none text-sm text-white font-medium overflow-hidden transition-all duration-200 ease-in transform hover:scale-110 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">
        Bouton 3
        <span className="absolute -z-1 z-[-1] top-0 left-0 w-full h-full bg-gray-400 transition-all duration-200 ease-in transform group-hover:scale-150 group-hover:rotate-180" aria-hidden="true"/>
      </button>




      {/* :MEDIUM BUTTON 3 */}
      <button className="m-5 group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none text-base text-white font-medium overflow-hidden transition-all duration-200 ease-in transform hover:scale-110 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">
        Bouton 3
        <span className="absolute -z-1 z-[-1] top-0 left-0 w-full h-full bg-gray-800 transition-all duration-200 ease-in transform group-hover:scale-150 group-hover:rotate-180" aria-hidden="true"/>
      </button>




      {/* :BIG BUTTON 3 */}
      <button className="m-5 group relative inline-flex items-center px-7 py-3.5 rounded shadow-lg outline-none text-lg text-white font-medium overflow-hidden transition-all duration-200 ease-in transform hover:scale-110 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">
        Bouton 3
        <span className="absolute -z-1 z-[-1] top-0 left-0 w-full h-full bg-gradient-to-br from-gray-400 to-gray-800 transition-all duration-200 ease-in transform group-hover:scale-150 group-hover:rotate-180" aria-hidden="true"/>
      </button>
               </div>

             </CodeBox>
        </>
    )
}
export default Button15;