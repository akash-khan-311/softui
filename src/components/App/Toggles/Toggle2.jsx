import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Toggle2 = () => {
    return(
        <>
             <CodeBox stringCode={`<div className="flex  mx-auto space-x-2 border-[3px] border-purple-400 rounded-xl select-none w-1/3 bg-white">
  <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
    <input type="radio" name="radio" defaultValue="html" className="peer hidden" defaultChecked />
    <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">HTML</span>
  </label>
  <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
    <input type="radio" name="radio" defaultValue="react" className="peer hidden" />
    <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">React</span>
  </label>
  <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
    <input type="radio" name="radio" defaultValue="vue" className="peer hidden" />
    <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">Vue</span>
  </label>
</div>`}>
           <div className="flex  mx-auto space-x-2 border-[3px] border-purple-400 rounded-xl select-none w-1/3 bg-white">
  <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
    <input type="radio" name="radio" defaultValue="html" className="peer hidden" defaultChecked />
    <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">HTML</span>
  </label>
  <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
    <input type="radio" name="radio" defaultValue="react" className="peer hidden" />
    <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">React</span>
  </label>
  <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
    <input type="radio" name="radio" defaultValue="vue" className="peer hidden" />
    <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">Vue</span>
  </label>
</div>

             </CodeBox>
        </>
    )
}
export default Toggle2;