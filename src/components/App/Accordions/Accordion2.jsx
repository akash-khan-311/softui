import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";
const accordionsData = [
  {
    title: "Why Choose Soft UI ? ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
  },
  {
    title: "What is Soft UI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
  },
  {
    title: "Another Question",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
  },
  {
    title: "Another Question 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
  },
];
const Accordion2 = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const handleToogle = (i) => {
    setAccordionOpen((prevI) => (prevI === i ? null : i));
  };
  return (
    <CodeBox stringCode={`    import { useState } from "react";
    const accordionsData = [
      {
        title: "Why Choose Soft UI ? ",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
      },
      {
        title: "What is Soft UI",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
      },
      {
        title: "Another Question",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
      },
      {
        title: "Another Question 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
      },
    ];
const Accordion = ()=> {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const handleToogle = (i) => {
    setAccordionOpen((prevI) => (prevI === i ? null : i));
  };

  return (
    <div className="space-y-4 mx-6">
        {accordionsData?.map((accordion, i) => (
          <div
            key={i}
            className="transition-all p-6 duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
          >
            <button
              onClick={() => handleToogle(i)}
              type="button"
              className="flex items-center justify-between w-full"
            >
              <span className="flex text-lg font-semibold text-black">
                {accordion.title}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={\`w-6 h-6 text-black transition-all ease-in-out \${
                  accordionOpen === i
                    ? "rotate-180 duration-200"
                    : "rotate-0 duration-200"
                }\`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={\`grid text-gray-600 transition-all ease-in-out duration-300 text-left \${
                accordionOpen === i
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              } \`}
            >
              <div
                className="overflow-hidden"
              >
                {accordion.description}
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Accordion
    
`}>
      <div className="space-y-4 mx-6">
        {accordionsData?.map((accordion, i) => (
          <div
            key={i}
            className="transition-all p-6 duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
          >
            <button
              onClick={() => handleToogle(i)}
              type="button"
              className="flex items-center justify-between w-full"
            >
              <span className="flex text-lg font-semibold text-black">
                {accordion.title}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-black transition-all ease-in-out ${
                  accordionOpen === i
                    ? "rotate-180 duration-200"
                    : "rotate-0 duration-200"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`grid text-gray-600 transition-all ease-in-out duration-300 text-left ${
                accordionOpen === i
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              } `}
            >
              <div
                className={`overflow-hidden   ${accordionOpen === i && " "} `}
              >
                {accordion.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </CodeBox>
  );
};

export default Accordion2;
