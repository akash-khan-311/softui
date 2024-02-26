/* eslint-disable react/no-unescaped-entities */
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
  {
    title: "Another Questions-1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
  },
  {
    title: "Another Questions-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
  },
 
];
const Accordion4 = () => {
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
      {
        title: "Another Questions-1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi? Modi, optio explicabo aspernatur perspiciatis nam hic quia necessitatibus, error obcaecati quo dolor cumque repudiandae!",
      },
      {
        title: "Another Questions-2",
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
    <div className="relative w-full bg-white px-6 pt-10 pb-8 my-8 shadow-xl ring-1 ring-gray-900 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className=" text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p className="text-lg text-gray-500 md:text-xl">
              Frequenty asked questions
            </p>
          </div>
          <div className="mx-auto  divide-y space-y-5 divide-gray-200">
            {accordionsData?.map((accordion, i) => (
              <div
                key={i}
                className="transition-all duration-200 cursor-pointer "
              >
                <button
                  onClick={() => handleToogle(i)}
                  className="w-full flex items-center justify-between font-medium px-6 py-4"
                >
                  <span>{accordion.title}</span>

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
                  className={\`px-6 grid transition-all ease-in-out duration-300 \${
                    accordionOpen === i
                      ? "grid-rows-[1fr] opacity-100 "
                      : "grid-rows-[0fr] opacity-0 p-0"
                  }\`}
                >
                  <p className="overflow-hidden">
                    We may offer discounts or promotions from time to time. To
                    stay up-to-date on the latest deals and special offers, you
                    can sign up for the company's newsletter or follow it on
                    social media.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Accordion
    
`}
    >
      <div className="relative w-full bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className=" text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p className="text-lg text-gray-500 md:text-xl">
              Frequenty asked questions
            </p>
          </div>
          <div className="mx-auto mt-10 divide-y space-y-5 divide-gray-500">
            {accordionsData?.map((accordion, i) => (
              <div
                key={i}
                className="transition-all duration-200 cursor-pointer "
              >
                <button
                  onClick={() => handleToogle(i)}
                  className="w-full flex items-center justify-between font-medium px-6 py-4"
                >
                  <span>{accordion.title}</span>

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
                  className={`px-6 grid transition-all ease-in-out duration-300   ${
                    accordionOpen === i
                      ? "grid-rows-[1fr] opacity-100 "
                      : "grid-rows-[0fr] opacity-0 p-0"
                  }`}
                >
                  <p className="overflow-hidden">
                    We may offer discounts or promotions from time to time. To
                    stay up-to-date on the latest deals and special offers, you
                    can sign up for the company's newsletter or follow it on
                    social media.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CodeBox>
  );
};

export default Accordion4;
