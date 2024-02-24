import {
  RiCustomerServiceFill,
  RiDownload2Fill,
  RiGlobalFill,
  RiMoneyDollarCircleFill,
} from "react-icons/ri";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Stats4 = () => {
  const stats = [
    {
      data: "50K",
      desc: "Satisfied Customers",
      icon: <RiCustomerServiceFill size={32} className="text-blue-500" />,
    },
    {
      data: "15K+",
      desc: "Downloads and counting",
      icon: <RiDownload2Fill size={32} className="text-green-500" />,
    },
    {
      data: "60+",
      desc: "Supported Countries",
      icon: <RiGlobalFill size={32} className="text-red-500" />,
    },
    {
      data: "50M+",
      desc: "Total Revenue Generated",
      icon: <RiMoneyDollarCircleFill size={32} className="text-purple-500" />,
    },
  ];

  return (
    <div>
      <CodeBox
        stringCode={`
    import { RiCustomerServiceFill, RiDownload2Fill, RiGlobalFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
    
    export default () => {
    const stats = [
    {
      data: "50K",
      desc: "Satisfied Customers",
      icon: <RiCustomerServiceFill size={32} className="text-blue-500" />,
    },
    {
      data: "15K+",
      desc: "Downloads and counting",
      icon: <RiDownload2Fill size={32} className="text-green-500" />,
    },
    {
      data: "60+",
      desc: "Supported Countries",
      icon: <RiGlobalFill size={32} className="text-red-500" />,
    },
    {
      data: "50M+",
      desc: "Total Revenue Generated",
      icon: <RiMoneyDollarCircleFill size={32} className="text-purple-500" />,
    },
  ];

return (
    <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-300">
              Discover Our Achievements
            </h3>
            <p className="mt-2 text-gray-400">
              We take pride in our accomplishments and continue to strive for
              more.
            </p>
          </div>

          <div className="mt-12 flex items-center flex-wrap justify-center gap-8">
            {stats.map((item, idx) => (
              <div key={idx} className="text-center  max-w-[16rem]">
                <div className='flex items-center'>
                <p>{item.icon}</p>
                <h4 className="text-4xl text-yellow-400 font-semibold">
                  {item.data}
                </h4>
                </div>
                <p className="mt-3 text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
)
}`}
      >
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-gray-300">
                Discover Our Achievements
              </h3>
              <p className="mt-2 text-gray-400">
                We take pride in our accomplishments and continue to strive for
                more.
              </p>
            </div>

            <div className="mt-12 flex items-center flex-wrap justify-center gap-8">
              {stats.map((item, idx) => (
                <div key={idx} className="text-center  max-w-[16rem]">
                  <div className="flex items-center">
                    <p>{item.icon}</p>
                    <h4 className="text-4xl text-yellow-400 font-semibold">
                      {item.data}
                    </h4>
                  </div>
                  <p className="mt-3 text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </CodeBox>
    </div>
  );
};

export default Stats4;
