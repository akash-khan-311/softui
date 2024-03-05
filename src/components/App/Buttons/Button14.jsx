import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button14 = () => {
  return (
    <>
      <CodeBox
        stringCode={`{/* :SMALL BUTTON 1 */}
<button className="group relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none bg-pink-500 text-sm text-white font-medium transition-all duration-200 ease-out hover:text-pink-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">
  <span className="absolute h-0 w-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true"/>
  <span className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full" aria-hidden="true"/>Button 1
  <span className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full" aria-hidden="true"/>
  <span className="absolute w-0 h-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true"/>
</button>

{/* :MEDIUM BUTTON 1 */}
<button className="group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none bg-yellow-500 text-white font-medium transition-all duration-200 ease-out hover:text-yellow-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">
  <span className="absolute h-0 w-0.5 right-0 top-0 bg-yellow-500 transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true"/>
  <span className="absolute left-0 bottom-0 bg-yellow-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full" aria-hidden="true"/>Button 1
  <span className="absolute left-0 bottom-0 bg-yellow-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full" aria-hidden="true"/>
  <span className="absolute w-0 h-0.5 right-0 top-0 bg-yellow-500 transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true"/>
</button>

{/* :BIG BUTTON 1 */}
<button className="group relative inline-flex items-center  px-7 py-3.5 rounded shadow-lg outline-none bg-gradient-to-br from-pink-500 to-yellow-500 text-lg text-white font-medium transition-all duration-200 ease-out hover:text-yellow-700 hover:from-transparent hover:to-transparent hover:shadow-none active:top-0.5 focus:outline-none">
  <span className="absolute h-0 w-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true"/>
  <span className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full" aria-hidden="true"/>Button 1
  <span className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full" aria-hidden="true"/>
  <span className="absolute w-0 h-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true"/>
</button>`}
      >
        <div className="flex justify-evenly flex-wrap gap-5 items-center">
          {/* :SMALL BUTTON 1 */}
          <button className="group relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none bg-pink-500 text-sm text-white font-medium transition-all duration-200 ease-out hover:text-pink-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">
            {/* span::before */}
            <span
              className="absolute h-0 w-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            Button 1{/* span::after */}
            <span
              className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
              aria-hidden="true"
            />
            <span
              className="absolute w-0 h-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:w-full"
              aria-hidden="true"
            />
          </button>

          {/* :MEDIUM BUTTON 1 */}
          <button className="group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none bg-yellow-500 text-white font-medium transition-all duration-200 ease-out hover:text-yellow-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">
            {/* span::before */}
            <span
              className="absolute h-0 w-0.5 right-0 top-0 bg-yellow-500 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-yellow-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            Button 1{/* span::after */}
            <span
              className="absolute left-0 bottom-0 bg-yellow-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
              aria-hidden="true"
            />
            <span
              className="absolute w-0 h-0.5 right-0 top-0 bg-yellow-500 transition-all duration-500 ease-out group-hover:w-full"
              aria-hidden="true"
            />
          </button>

          {/* :BIG BUTTON 1 */}
          <button className="group relative inline-flex items-center  px-7 py-3.5 rounded shadow-lg outline-none bg-gradient-to-br from-pink-500 to-yellow-500 text-lg text-white font-medium transition-all duration-200 ease-out hover:text-yellow-700 hover:from-transparent hover:to-transparent hover:shadow-none active:top-0.5 focus:outline-none">
            {/* span::before */}
            <span
              className="absolute h-0 w-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            Button 1{/* span::after */}
            <span
              className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
              aria-hidden="true"
            />
            <span
              className="absolute w-0 h-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:w-full"
              aria-hidden="true"
            />
          </button>
        </div>
      </CodeBox>
    </>
  );
};
export default Button14;
