import { useState } from "react";
import "tailwindcss/tailwind.css";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Accordions2 = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <CodeBox
        stringCode={`
import { useState } from "react";
import "tailwindcss/tailwind.css";

const Accordions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="mb-2 rounded-lg border border-blue-gray-100"
        >
          <div
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center cursor-pointer px-4 py-3 border-b transition-colors text-white"
          >
            <span className="text-16 font-bold">
              {openAccordion === index ? "-" : "+"}
            </span>
            <span className="text-lg font-bold">{item.title}</span>
          </div>
          {openAccordion === index && (
            <div className="px-4 py-2 text-base font-normal text-white">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordions;    
    `}
      >
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="mb-2 rounded-lg border border-blue-gray-100"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center cursor-pointer px-4 py-3 border-b transition-colors text-white"
            >
              <span className="text-16 font-bold">
                {openAccordion === index ? "-" : "+"}
              </span>
              <span className="text-lg font-bold">{item.title}</span>
            </div>
            {openAccordion === index && (
              <div className="px-4 py-2 text-base font-normal text-white">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </CodeBox>
    </>
  );
};

export default Accordions2;
