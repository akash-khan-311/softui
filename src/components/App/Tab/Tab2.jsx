import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";
const tabData = [
  { label: "Tab-1", description: 'Tab-1 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. ' },
  { label: "Tab-2",description: 'Tab-2 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. ' },
  { label: "Tab-3" ,description: 'Tab-3 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. '},
  { label: "Tab-4" ,description: 'Tab-4 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. '},
  { label: "Tab-5" ,description: 'Tab-5 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. '},
];

const Tab2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
    return (
       <CodeBox text={'Tab with Content'} stringCode={`import { useState } from "react";
       const tabData = [
        { label: "Tab-1", description: 'Tab-1 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. ' },
        { label: "Tab-2",description: 'Tab-2 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. ' },
        { label: "Tab-3" ,description: 'Tab-3 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. '},
        { label: "Tab-4" ,description: 'Tab-4 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. '},
        { label: "Tab-5" ,description: 'Tab-5 description --Welcome to Soft UI, where innovation takes flight. Explore our meticulously crafted components designed to elevate your projects. Redefine UI design with Soft UI, one component at a time. '},
      ];
      
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
      <div className="border bg-teal-300 w-3/5 mx-auto rounded-md">
      <ul className="flex items-center justify-center gap-x-5">
        {tabData.map((tab, i) => (
            <li key={i} onClick={() => handleTabClick(i)} className={\`cursor-pointer text-xl px-4 py-2 transition-all duration-300 \${i === activeTab? "bg-white text-black" : "text-white"}\`}>{tab.label}</li>
        ))}
        </ul>
        <div className="p-5 text-black bg-white">{tabData[activeTab].description}</div>
    </div>
  )
}

export default Tabs;
`}>
         <div className="border bg-purple-300 w-3/5 mx-auto rounded-md">
        <ul className="flex items-center justify-center gap-x-5 ">
          {tabData.map((tab, i) => (
              <li key={i} onClick={() => handleTabClick(i)} className={`cursor-pointer text-xl px-4 py-2 transition-all duration-300 ${i === activeTab? "bg-white  text-black" : "text-white"}`}>{tab.label}</li>
          ))}
        </ul>
        <div className="p-5 text-black bg-white">{tabData[activeTab].description}</div>
      </div>
       </CodeBox>
    )
}

export default Tab2