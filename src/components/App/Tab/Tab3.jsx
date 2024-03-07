import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Tab3 = () => {
    const TabData = ['Home', 'Calendar', 'Results', 'Live', 'Settings'];
    const [active , setActive] = useState(0)
    return(
        <>
             <CodeBox stringCode={`import { useState } from "react"
const TabData = ['Home', 'Calendar', 'Results', 'Live', 'Settings'];

const Tab = () => {
    const [active , setActive] = useState(0)
    return (
        <div className="flex justify-center items-center text-sm font-medium text-center text-gray-50 border-b border-b-transparent border-gray-200 ">
        <ul className="flex flex-wrap bg-white dark:bg-blue-gray-800">
            {
                TabData.map((item, index) =>(
                    <li key={index} className="mr-2">
                    <a onClick={()=> setActive(index)} href="#!" className={\`inline-block py-2 px-4 text-xl border-b-2 border-transparent rounded-t-lg hover:text-pink-600 \${active === index ? 'text-pink-600 border-pink-600' : 'text-black border-transparent'} \`}>
                    {item}
                    </a>
                </li>
                ))
            }
        </ul>
        </div>
    )
}
export default Tab;
`}>
                
<div className="flex justify-center items-center text-sm font-medium text-center text-gray-50 border-b border-b-transparent border-gray-200 ">
  <ul className="flex flex-wrap bg-white dark:bg-blue-gray-800">
    {
        TabData.map((item, index) =>(
            <li key={index} className="mr-2">
            <a onClick={()=> setActive(index)} href="#!" className={`inline-block py-2 px-4 text-xl border-b-2 border-transparent rounded-t-lg hover:text-pink-600 ${active === index ? 'text-pink-600 border-pink-600' : 'text-black border-transparent'} `}>
              {item}
            </a>
          </li>
        ))
    }
  </ul>
</div>

             </CodeBox>
        </>
    )
}
export default Tab3;