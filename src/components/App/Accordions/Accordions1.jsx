import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import CodeBox from "../../../Shared/CodeBox/CodeBox";
const accordionsData = [
  {
    title: "Why Choose Aero UI ? ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
  },
  {
    title: "What is Aero UI",
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
    { title: "Why Choose Aero UI ? ", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!" }, 
    { title: "What is Aero UI", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!" }, 
    { title: "Another Question", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!" }, 
    { title: "Another Question 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!" }
];
    export const Accordion = ()=> {
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
                            <FaAngleDown className={\`transition-all ease-in-out duration-300 text-3xl \${accordionOpen === i ? "rotate-180" : "rotate-0"}\`}/>
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
                <span className="">
                  <FaAngleDown
                    className={` transition-all ease-in-out duration-300 text-3xl  ${
                      accordionOpen === i ? "rotate-180" : "rotate-0"
                    }`}
                  />
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
