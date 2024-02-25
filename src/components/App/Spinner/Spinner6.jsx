import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner6 = () => {
    return(
        <div>
            <CodeBox stringCode={`<div aria-label="Loading..." role="status" className="flex items-center space-x-2 ">
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
</div>`}>
            <div className="flex justify-center items-center">
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
            </div>

            </CodeBox>
        </div>
    )
}
export default Spinner6;