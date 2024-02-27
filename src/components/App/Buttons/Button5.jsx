import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button5 = () => {
  return (
    <>
      <CodeBox
        stringCode={`
<button className="relative"><span className="absolute -inset-5"><div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg transition bg-gradient-to-r from-red-400 via-green-500 to-gray-700"></div></span><a href="#" title="" className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Shadow</a></button>
<button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">Click me!</button>
<button className="relative inline-flex group"><span className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#96da4f] via-[#5742d0] to-[#ec2994] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></span><a href="#" title="Get quote now" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#6752db] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900" role="button">Hover</a></button>
        `}
      >
        <div className="flex flex-wrap justify-evenly items-center gap-4">
          <button className="relative">
            <span className="absolute -inset-5">
              <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg transition bg-gradient-to-r from-red-400 via-green-500 to-gray-700"></div>
            </span>
            <a
              href="#"
              title=""
              className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Shadow
            </a>
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Click me!
          </button>
          <button className="relative inline-flex group">
            <span className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#96da4f] via-[#5742d0] to-[#ec2994] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></span>
            <a
              href="#"
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#6752db] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
              role="button"
            >
              Hover
            </a>
          </button>
        </div>
      </CodeBox>
    </>
  );
};

export default Button5;
