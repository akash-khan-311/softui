
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const SpeedDial1 = () => {
    const svgs = [

        { svg: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd"/>
      </svg>
      )
       }, // Replace YourCustomSVGComponent1 with your SVG component or icon
        { svg: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z" clipRule="evenodd" />
</svg>

      ) }, // Replace YourCustomSVGComponent2 with your SVG component or icon
        { svg: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M9.6 2.6A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2l.5.3a2 2 0 0 1 2.9 0l1.4 1.3a2 2 0 0 1 0 2.9l.1.5h.1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2l-.3.5a2 2 0 0 1 0 2.9l-1.3 1.4a2 2 0 0 1-2.9 0l-.5.1v.1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2l-.5-.3a2 2 0 0 1-2.9 0l-1.4-1.3a2 2 0 0 1 0-2.9l-.1-.5H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2l.3-.5a2 2 0 0 1 0-2.9l1.3-1.4a2 2 0 0 1 2.9 0l.5-.1V4c0-.5.2-1 .6-1.4ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" />
</svg>
) }, // Replace YourCustomSVGComponent3 with your SVG component or icon
        { svg: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"/>
      </svg>
) }, // Replace YourCustomSVGComponent3 with your SVG component or icon
    ];

    return (
      <CodeBox stringCode={`
 const svgs = [
  {svg: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd"/></svg>)}, // Replace YourCustomSVGComponent1 with your SVG component or icon
  {svg: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z" clipRule="evenodd" /></svg>) },
  {svg: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M9.6 2.6A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2l.5.3a2 2 0 0 1 2.9 0l1.4 1.3a2 2 0 0 1 0 2.9l.1.5h.1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2l-.3.5a2 2 0 0 1 0 2.9l-1.3 1.4a2 2 0 0 1-2.9 0l-.5.1v.1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2l-.5-.3a2 2 0 0 1-2.9 0l-1.4-1.3a2 2 0 0 1 0-2.9l-.1-.5H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2l.3-.5a2 2 0 0 1 0-2.9l1.3-1.4a2 2 0 0 1 2.9 0l.5-.1V4c0-.5.2-1 .6-1.4ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" /></svg>) },
  {svg: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"/></svg>)},
];
     
const SpeedDial = ()=> {
    return(
        <div className="h-[300px] relative">
            <div className="group flex flex-col items-center justify-center w-max mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                {/* + icon  */}
                <div className="flex justify-center w-16 h-16 bg-gradient-to-tr from-pink-600 to-pink-900 rounded-full items-center group-hover:rotate-[135deg] hover:bg-pink-400/80 duration-500">
                    <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {/* icon container  */}
                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                    {/* Icon Map */}
                    {svgs?.map((svg, idx) => (
                        <div key={idx} className={\`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-md opacity-0 group-hover:opacity-100 \${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}\`}>
                            <div className="w-full h-full bg-white hover:bg-gray-200 flex justify-center items-center rounded-full duration-300">
                                {svg?.svg}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpeedDial;
     `}>
          <div className="h-[300px] relative">
            <div className="group flex flex-col items-center justify-center w-max mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                {/* + icon  */}
                <div className="flex justify-center w-16 h-16 bg-gradient-to-tr from-pink-600 to-pink-900 rounded-full items-center group-hover:rotate-[135deg] hover:bg-pink-400/80 duration-500">
                    <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {/* icon container  */}
                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                    {/* Icon Map */}
                    {svgs?.map((svg, idx) => (
                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-md opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                            <div className="w-full h-full bg-white hover:bg-gray-200 flex justify-center items-center rounded-full duration-300">
                                {svg?.svg}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </CodeBox>
    );
};

export default SpeedDial1;
