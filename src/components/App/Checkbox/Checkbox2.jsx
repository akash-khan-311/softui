import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Checkbox2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <CodeBox
        stringCode={`
     import { useState } from 'react'

     export const Checkbox1 = () => {
       const [isChecked, setIsChecked] = useState(false)
     
       const handleCheckboxChange = () => {
         setIsChecked(!isChecked)
       }
     
       return (
         <label className='flex items-center cursor-pointer select-none text-white'>
           <div className='relative'>
             <input
               type='checkbox'
               checked={isChecked}
               onChange={handleCheckboxChange}
               className='sr-only'
             />
             <div className='box mr-4 flex h-5 w-5 items-center justify-center rounded border-stroke border'>
               <span className={"dot h-[10px] w-[10px] rounded-sm " + (isChecked ? 'bg-blue-500' : '')}></span>
             </div>
           </div>
           Checkbox Text
         </label>
       )
     }
      
      `}
      >
        <div className="flex justify-center items-center">
          <label className="flex items-center cursor-pointer select-none text-white ">
            <div className="relative">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border-stroke border">
                <span
                  className={`dot h-[10px] w-[10px] rounded-sm ${
                    isChecked && "bg-blue-500"
                  }`}
                ></span>
              </div>
            </div>
            CheckboxText
          </label>
        </div>
      </CodeBox>
    </>
  );
};

export default Checkbox2;
