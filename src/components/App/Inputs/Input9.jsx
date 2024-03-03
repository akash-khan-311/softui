import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Input9 = () => {
  return (
    <CodeBox stringCode={` <div className="bg-white flex justify-center items-center mx-auto p-4 rounded-lg max-w-[350px]">
    <label className="text-gray-600 text-sm">Phone</label>
    <div className="relative mt-2 max-w-xs text-gray-500">
      <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
        <select className="text-sm outline-none rounded-lg h-full">
          <option>US</option>
          <option>ES</option>
          <option>MR</option>
        </select>
      </div>
      <input
        type="number"
        placeholder="+1 (555) 000-000"
        className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
      />
    </div>
  </div>`}>
      <div className="bg-white flex justify-center items-center mx-auto p-4 rounded-lg max-w-[350px]">
        <label className="text-gray-700 text-sm">Phone</label>
        <div className="relative mt-2 max-w-xs text-gray-500">
          <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
            <select className="text-sm outline-none rounded-lg h-full">
              <option>US</option>
              <option>ES</option>
              <option>MR</option>
            </select>
          </div>
          <input
            type="number"
            placeholder="+1 (555) 000-000"
            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
          />
        </div>
      </div>
    </CodeBox>
  );
};
export default Input9;
