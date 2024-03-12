/* eslint-disable react/no-unescaped-entities */
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const ErrorPage5 = () => {
  return (
    <CodeBox stringCode={`<section className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://i.postimg.cc/hj8x6nTg/Private-GIF.gif"
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-10"/>
    </div>
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-5xl font-bold leading-tight mb-4">
      <span className="text-[#ff0000] text-7xl">404 !</span> Sorry this page doesn't exist 
      </h1>
      <p className="text-lg text- mb-8">
        Go back to the home page
      </p>
      <a
        href="#Home"
        className="bg-[#42a5f6] text-gray-200 hover:bg-[#3892db] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-white"
      >
        Proceed
      </a>
    </div>
  </section>`}>
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/hj8x6nTg/Private-GIF.gif"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-10"/>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
          <span className="text-[#ff0000] text-7xl">404 !</span> Sorry this page doesn't exist 
          </h1>
          <p className="text-lg text- mb-8">
            Go back to the home page
          </p>
          <a
            href="#Home"
            className="bg-[#42a5f6] text-gray-200 hover:bg-[#368ed6] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-white"
          >
            Proceed
          </a>
        </div>
      </section>
    </CodeBox>
  );
};

export default ErrorPage5;
