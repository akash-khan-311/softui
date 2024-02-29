import { useState } from "react";

import CodeBox from "../../../Shared/CodeBox/CodeBox";
const accordionsData = [
  {
    title: "Why Choose Aero UI ? ",

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
const Accordions1 = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const handleToogle = (i) => {
    setAccordionOpen((prevI) => (prevI === i ? null : i));
  };
  return (
    <div className="flex flex-col justify-center gap-5">
      <CodeBox
        stringCode={`import { useState } from "react";
    const accordionsData = [
    { title: "Why Choose Soft UI ? ", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!" }, 
    { title: "What is Soft UI", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!" }, 
    { title: "Another Question", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!" }, 
    { title: "Another Question 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!" }
];
     const Accordion = ()=> {
        const [accordionOpen, setAccordionOpen] = useState(null);
        const handleToogle = (i) => {
            setAccordionOpen((prevI) => (prevI === i ? null : i));
            };
        return (
            <div className="mx-6 rounded-md border font-sans">
                {accordionsData?.map((accordion, i) => (
                    <div className="border-b p-6" key={i}>
                        <button
                                onClick={() => handleToogle(i)}
                                className="flex h-full w-full justify-between py-3 items-center text-white">
                            <h2 className="text-[18px]">{accordion.title}</h2>
                            <span>
                              <svg
                                className={\`w-10 h-10 fill-white transition-all ease-in-out duration-300 \${
                                  accordionOpen === i ? "rotate-180" : "rotate-0"
                                }\`}
                                viewBox="0 0 1792 1792"
                                width="1792"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                              </svg>
                            </span>
                        </button>
                        <div className={\`grid text-gray-500 transition-all ease-in-out duration-300 text-left \${accordionOpen === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} \`}>
                            <div className="overflow-hidden">{accordion.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        )

    }        

    }
        
export default Accordion;
`}
        text={"Accordion Example"}
      >
        <div className="mx-6 rounded-md border font-sans">
          {accordionsData?.map((accordion, i) => (
            <div className="border-b p-6" key={i}>
              <button
                onClick={() => handleToogle(i)}
                className="flex h-full w-full justify-between py-3 items-center text-white"
              >
                <h2 className="text-[18px]">{accordion.title}</h2>
                <span>
                  <svg
                    className={`w-10 h-10 fill-white transition-all ease-in-out duration-300 ${
                      accordionOpen === i ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 1792 1792"
                    width="1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid  text-gray-500 transition-all ease-in-out duration-300 text-left ${
                  accordionOpen === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                } `}
              >
                <div className="overflow-hidden">{accordion.description}</div>
              </div>
            </div>
          ))}
        </div>
      </CodeBox>
    </div>
  );
};

export default Accordions1;
