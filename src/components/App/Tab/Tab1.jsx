import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const tabData = [
  { label: "Tab-1" },
  { label: "Tab-2" },
  { label: "Tab-3" },
  { label: "Tab-4" },
  { label: "Tab-5" },
];

const Tab1 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <CodeBox
      text={'Simple Tabs'}
        stringCode={`import { useState } from "react";
const tabData = [
  { label: "Tab-1" },
  { label: "Tab-2" },
  { label: "Tab-3" },
  { label: "Tab-4" },
  { label: "Tab-5" },
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
    return (
        <div className="border bg-teal-300 w-3/5 mx-auto rounded-md">
        <ul className="flex items-center justify-center gap-x-5 border-b ">
          {tabData.map((tab, i) => (
              <li key={i} onClick={() => handleTabClick(i)} className={\`cursor-pointer text-xl px-4 py-2 transition-all duration-300 \${i === activeTab? "bg-white rounded-t text-black" : "text-white"}\`}>{tab.label}</li>
          ))}
        </ul>
      </div>
    )
}

export default Tabs
`}
      >
        <div className="border bg-teal-300 w-3/5 mx-auto rounded-md">
          <ul className="flex items-center justify-center gap-x-5 border-b ">
            {tabData.map((tab, i) => (
              <div key={i}>
                <li
                  onClick={() => handleTabClick(i)}
                  className={`cursor-pointer text-xl px-4 py-2 transition-all duration-300 ${
                    i === activeTab
                      ? "bg-white rounded-t text-black"
                      : "text-white"
                  }`}
                >
                  {tab.label}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </CodeBox>
    </>
  );
};
export default Tab1;
