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
    title: "How To Use Soft UI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
  },
  {
    title: "How To Create Account in Soft UI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
  },
];
const Accordion3 = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const handleToogle = (i) => {
    setAccordionOpen((prevI) => (prevI === i ? null : i));
  };
  return (
    <CodeBox
      stringCode={`    import { useState } from "react";
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
        title: "How To Use Soft UI",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
      },
      {
        title: "How To Create Account in Soft UI",
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
        className="transition-all  duration-200 bg-teal-600 rounded-lg shadow-lg cursor-pointer "
      >
        <button
          onClick={() => handleToogle(i)}
          type="button"
          className="flex items-center justify-between w-full p-6"
        >
          <span className="flex text-lg font-semibold text-white">
            {accordion.title}
          </span>
        </button>
        <div
          className={\`grid text-gray-900 bg-teal-100 rounded-b-lg border-b-2 border-l-2 border-r-2 border-dashed border-teal-500 transition-all ease-in-out duration-300 text-left  \${
            accordionOpen === i
              ? "grid-rows-[1fr] opacity-100 p-6"
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
    
`}
    >
      <div className="space-y-4 mx-6">
        {accordionsData?.map((accordion, i) => (
          <div
            key={i}
            className="transition-all  duration-200 bg-teal-600 rounded-lg shadow-lg cursor-pointer "
          >
            <button
              onClick={() => handleToogle(i)}
              type="button"
              className="flex items-center justify-between w-full p-6"
            >
              <span className="flex text-lg font-semibold text-white">
                {accordion.title}
              </span>
            </button>
            <div
              className={`grid text-gray-900 bg-teal-100 rounded-b-lg border-b-2 border-l-2 border-r-2 border-dashed border-teal-500 transition-all ease-in-out duration-300 text-left  ${
                accordionOpen === i
                  ? "grid-rows-[1fr] opacity-100 p-6"
                  : "grid-rows-[0fr] opacity-0"
              } `}
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
    </CodeBox>
  );
};

export default Accordion3;
