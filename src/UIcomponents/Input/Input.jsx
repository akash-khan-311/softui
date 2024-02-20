import CodeBox from "../../Shared/CodeBox/CodeBox";

const Input = () => {
  return (
    <div>
      {/* Default Input  */}
      <CodeBox
        text={"Simple Text Input"}
        stringCode={`<div>
    <label htmlFor="username" className="block text-gray-200">username</label>
    <div className="mt-2">
        <input type="text" name="username" id="username" className="block w-64 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"/>
    </div>
</div>`}
      >
        <div>
          <label htmlFor="username" className="block text-gray-200 ">
            username
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="username"
              name="username"
              className="block w-64 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>
      </CodeBox>
      {/* Input with Placeholder */}
      <CodeBox
        text={"Placeholder"}
        stringCode={`<input placeholder="Enter text here" className="p-2 border-2 border-gray-300 rounded-md text-base text-gray-700 outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" />`}
      >
        <input
          placeholder="Enter text here"
          className="p-2 border-2 border-gray-300 rounded-md text-base text-gray-700 outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          type="text"
        />
      </CodeBox>
      {/* Input with button */}
      <CodeBox
        text={"Input With Button"}
        stringCode={`<div className="flex items-center">
  <input placeholder="Enter your email" className="max-w-[250px] px-3 py-[11px] text-base text-black border border-r-0 rounded-l-md focus:outline-none" name="email" type="email" />
  <button className="bg-blue-500 text-white py-3 px-6 rounded-r-md cursor-pointer hover:bg-blue-600 focus:outline-none">Subscribe</button>
</div>`}
      >
        <div className="flex items-center">
          <input
            placeholder="Enter your email"
            className="max-w-[250px] px-3 py-[11px] text-base text-black border border-r-0 rounded-l-md focus:outline-none"
            name="email"
            type="email"
          />
          <button className="bg-blue-500 text-white py-3 px-6 rounded-r-md cursor-pointer hover:bg-blue-600 focus:outline-none">
            Subscribe
          </button>
        </div>
      </CodeBox>
      <CodeBox
        text={"Input With Button"}
        stringCode={`      <div className="w-72">
        <div className="relative w-full min-w-[200px] h-10">
          <input className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-200" placeholder=" "/>
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-200 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-200 before:border-blue-gray-200 peer-focus:before:!border-gray-200 after:border-blue-gray-200 peer-focus:after:!border-gray-200">Username</label>
        </div>
      </div>`}
      >
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-200"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-200 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-200 before:border-blue-gray-200 peer-focus:before:!border-gray-200 after:border-blue-gray-200 peer-focus:after:!border-gray-200">
              Username
            </label>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};

export default Input;
