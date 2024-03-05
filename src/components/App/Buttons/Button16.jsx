import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button16 = () => {
    return(
        <>
             <CodeBox stringCode={`{/* :EXTRA SMALL BUTTON 1b */}
<button type="button" className="relative inline-flex items-center px-2.5 py-1.5 rounded border border-transparent bg-blue-600 text-xs text-white font-medium transition-all duration-200 hover:bg-blue-800 active:translate-y-[1px]">Button 1b</button>
{/* :SMALL BUTTON 1b */}
<button type="button" className="relative inline-flex items-center px-3.5 py-2 rounded border border-transparent bg-blue-600 text-sm text-white font-medium transition-all duration-200 hover:bg-blue-800 active:translate-y-[2px]">Button 1b</button> 
{/* :MEDIUM BUTTON 1b */}
<button type="button" className="relative inline-flex items-center px-5 py-2.5 rounded border border-transparent bg-blue-600 text-base text-white font-medium transition-all duration-200 hover:bg-blue-800 active:translate-y-[3px]">Button 1b</button>
{/* :BIG BUTTON 1b */}
<button type="button" className="relative inline-flex items-center px-7 py-3.5 rounded border border-transparent bg-blue-600 text-lg text-white font-medium transition-all duration-200 hover:bg-blue-800 active:translate-y-[4px]">Button 1</button>`}>
                 <div className="flex justify-evenly flex-wrap items-center gap-5">
                    {/* :EXTRA SMALL BUTTON 1b */}
      <button type="button" className="relative inline-flex items-center px-2.5 py-1.5 rounded border border-transparent bg-blue-600 text-xs text-white font-medium transition-all duration-200 hover:bg-blue-800 active:translate-y-[1px]">
        Button 1b
      </button>
      

      {/* :SMALL BUTTON 1b */}
      <button type="button" className="relative inline-flex items-center px-3.5 py-2 rounded border border-transparent bg-blue-600 text-sm text-white font-medium transition-all duration-200 hover:bg-blue-800 active:translate-y-[2px]">
        Button 1b
      </button>
      
      
      {/* :MEDIUM BUTTON 1b */}
      <button type="button" className="relative inline-flex items-center px-5 py-2.5 rounded border border-transparent bg-blue-600 text-base text-white font-medium transition-all duration-200 hover:bg-blue-800 active:translate-y-[3px]">
        Button 1b
      </button>
      
      
      {/* :BIG BUTTON 1b */}
      <button type="button" className="relative inline-flex items-center px-7 py-3.5 rounded border border-transparent bg-blue-600 text-lg text-white font-medium transition-all duration-200 hover:bg-blue-800 active:translate-y-[4px]">
        Button 1b
      </button>
                 </div>
             </CodeBox>
        </>
    )
}
export default Button16;