import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Hero5 = () => {
  return (
    <>
      <CodeBox stringCode={`exrpot const Header = ()=> {
  return (
    <div className="bg-cyan-900 h-screen flex items-center">
    <div className="md:container mx-auto px-5 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <div className="md:w-1/2 text-center md:text-left mx-auto">
          <span className="w-20 h-2 bg-gray-200  mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white ">
            Be on
            <span className="text-5xl sm:text-7xl">Time</span>
          </h1>
          <p className="text-sm sm:text-base text-white">
            Dimension of reality that makes change possible and
            understandable. An indefinite and homogeneous environment in
            which natural events and human existence take place.
          </p>
          <div className="flex flex-col sm:flex-row  justify-center md:justify-start items-center mt-8">
            <a
              href="#!"
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent transition-all ease-in text-white text-md mb-2 sm:mr-4 mr-0  sm:mb-0 hover:bg-pink-400"
            >
              Get started
            </a>
            <a
              href="#!"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500  text-white transition-all ease-in hover:bg-pink-500 hover:text-white text-md"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mx-auto mt-10 md:mt-0">
          <img
            src="https://www.tailwind-kit.com/images/object/10.png"
            className="md:max-w-[300px]   m-auto"
          />
        </div>
      </div>
    </div>
  </div> 
  )
}`}>
        <div className="bg-cyan-900 py-16 flex items-center px-10">
          <div className="md:container mx-auto px-5 md:px-0 ">
            <div className="flex flex-col md:flex-row justify-between items-center ">
              <div className="md:w-1/2 text-center md:text-left mx-auto">
                <span className="w-20 h-2 bg-gray-200  mb-12"></span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white ">
                  Be on
                  <span className="text-5xl sm:text-7xl">Time</span>
                </h1>
                <p className="text-sm sm:text-base text-white">
                  Dimension of reality that makes change possible and
                  understandable. An indefinite and homogeneous environment in
                  which natural events and human existence take place.
                </p>
                <div className="flex flex-col sm:flex-row  justify-center md:justify-start items-center mt-8">
                  <a
                    href="#!"
                    className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mb-2 sm:mr-4 mr-0  sm:mb-0 hover:bg-pink-400"
                  >
                    Get started
                  </a>
                  <a
                    href="#!"
                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 mx-auto mt-10 md:mt-0">
                <img
                  src="https://www.tailwind-kit.com/images/object/10.png"
                  className="md:max-w-[300px]   m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Hero5;
