import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner6 = () => {
  return (
    <>
      <CodeBox
        stringCode={` {/* Sppiner-1 */}
<div aria-label="Loading..." role="status" className="flex items-center space-x-2 ">
  <svg className="h-20 w-20 animate-spin stroke-gray-200" viewBox="0 0 256 256">
    <line x1={128} y1={32} x2={128} y2={64} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
    <line x1={224} y1={128} x2={192} y2={128} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}>
    </line>
    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
    <line x1={128} y1={224} x2={128} y2={192} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}>
    </line>
    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
    <line x1={32} y1={128} x2={64} y2={128} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}>
    </line>
  </svg>
  <span className="text-4xl font-medium text-gray-200 ">Loading...</span>
</div>
{/* Sppiner-2 */}
<div id="loading-overlay" className=" flex items-center justify-center ">
  <svg className="animate-spin h-8 w-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
    </path>
  </svg>
  <span className="text-white text-2xl ">Loading...</span>
</div>
`}
      >
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0-0 justify-evenly items-center">
            {/* Sppiner-1 */}
          <div
            aria-label="Loading..."
            role="status"
            className="flex items-center space-x-2 "
          >
            <svg
              className="h-8 w-8 animate-spin stroke-gray-200"
              viewBox="0 0 256 256"
            >
              <line
                x1={128}
                y1={32}
                x2={128}
                y2={64}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={24}
              />
              <line
                x1="195.9"
                y1="60.1"
                x2="173.3"
                y2="82.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={24}
              />
              <line
                x1={224}
                y1={128}
                x2={192}
                y2={128}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={24}
              ></line>
              <line
                x1="195.9"
                y1="195.9"
                x2="173.3"
                y2="173.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={24}
              />
              <line
                x1={128}
                y1={224}
                x2={128}
                y2={192}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={24}
              ></line>
              <line
                x1="60.1"
                y1="195.9"
                x2="82.7"
                y2="173.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={24}
              />
              <line
                x1={32}
                y1={128}
                x2={64}
                y2={128}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={24}
              />
              <line
                x1="60.1"
                y1="60.1"
                x2="82.7"
                y2="82.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={24}
              ></line>
            </svg>
            <span className="text-2xl font-medium text-gray-200 ">
              Loading...
            </span>
          </div>
          {/* spiiner-2 */}
          <div id="loading-overlay" className=" flex items-center justify-center ">
  <svg className="animate-spin h-8 w-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
    </path>
  </svg>
  <span className="text-white text-2xl ">Loading...</span>
</div>

        </div>
        
      </CodeBox>
    </>
  );
};
export default Spinner6;
