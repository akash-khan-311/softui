import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button3 = () => {
  return (
    <>
      <CodeBox
        stringCode={`<button className="relative flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 border-2 border-white rounded-full shadow-md text-white font-bold text-base transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:border-opacity-0"><span>Apply Now</span><svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"/></svg></button>
<button className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">Button</button>
<button className="hover:brightness-110  hover:animate-pulse font-bold py-2 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Hover on me</button>`}
      >
        <div className="flex flex-wrap gap-4 justify-evenly items-center ">
          <button className="relative flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 border-2 border-white rounded-full shadow-md text-white font-bold text-base transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:border-opacity-0">
            <span>Apply Now</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">
            Button
          </button>
          <button className="hover:brightness-110  hover:animate-pulse font-bold py-2 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">
            Hover on me
          </button>
        </div>
      </CodeBox>
    </>
  );
};

export default Button3;
