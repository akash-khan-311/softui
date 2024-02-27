import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Toggle1 = () => {
  return (
    <div>
      <CodeBox
        stringCode={` {/* first toggle */}
<label className="relative  cursor-pointer">
  <input type="checkbox" defaultValue className="peer sr-only" />
  <div className="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-200" />
</label>
{/* second toggle */}       
<input type="checkbox" className="peer sr-only opacity-0" id="toggle" />
<label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"></label>
{/* third toggle */}
<label className="relative inline-flex items-center cursor-pointer">
  <input className="sr-only peer"  type="checkbox" />
  <div className="peer ring-1 ring-gray-900 bg-gradient-to-r from-green-400 to-green-900 rounded-full outline-none duration-300 after:duration-500 w-20 h-8  shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-red-500 peer-checked:to-red-900 shadow-gray-900 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-900  after:content-[''] after:rounded-full after:absolute after:outline-none after:h-10 after:w-10 after:bg-gray-50 after:-top-1 after:-left-2 after:flex after:justify-center after:items-center after:border-2 after:border-gray-900  peer-checked:after:translate-x-14">
  </div>
</label>

`}
      >
        <div className="flex flex-wrap justify-evenly items-center">
          {/* First Toggle */}
          <label className="relative  cursor-pointer">
            <input type="checkbox" defaultValue className="peer sr-only" />
            <div className="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-200" />
          </label>
          {/* Second Toggle */}
          <input
            type="checkbox"
            className="peer sr-only opacity-0"
            id="toggle1"
          />
          <label
            htmlFor="toggle1"
            className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
          ></label>
          {/* Third Toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
  <input className="sr-only peer"  type="checkbox" />
  <div className="peer ring-1 ring-gray-900 bg-gradient-to-r from-green-400 to-green-900 rounded-full outline-none duration-300 after:duration-500 w-20 h-8  shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-red-500 peer-checked:to-red-900 shadow-gray-900 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-900  after:content-[''] after:rounded-full after:absolute after:outline-none after:h-10 after:w-10 after:bg-gray-50 after:-top-1 after:-left-2 after:flex after:justify-center after:items-center after:border-2 after:border-gray-900  peer-checked:after:translate-x-14">
  </div>
</label>

        </div>
      </CodeBox>
    </div>
  );
};
export default Toggle1;
