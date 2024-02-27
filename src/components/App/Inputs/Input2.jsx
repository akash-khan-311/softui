import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Input2 = () => {
  return (
    <>
      <CodeBox
        text={"Placeholder"}
        stringCode={`<input placeholder="Enter text here" className="p-2 border-2 border-gray-300 rounded-md text-base text-gray-700 outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" />

<form className="flex ">
  <input name="email" type="email" autoComplete="email" placeholder="jane.doe@example.com" className="px-4 py-2 rounded-l-lg bg-slate-700 focus:bg-slate-800 focus:text-slate-300 text-slate-400 placeholder-slate-400 focus:ring-0 focus:outline-none" required defaultValue />
  <button type="submit" className="px-4 py-2 text-sm text-white font-bold uppercase bg-blue-600 rounded-r-lg text-slate-300 active:bg-blue-800">
    Subscribe
  </button>
</form>      
        
        `}
      >
        <div className="flex justify-evenly flex-wrap gap-5">
          <input
            placeholder="Enter text here"
            className="p-2 border-2 border-gray-300 rounded-md text-base text-gray-700 outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            type="text"
          />
          {/*  */}
          <form className="flex ">
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane.doe@example.com"
              className="px-4 py-2 rounded-l-lg bg-slate-700 focus:bg-slate-800 focus:text-slate-300 text-slate-400 placeholder-slate-400 focus:ring-0 focus:outline-none"
              required
              defaultValue
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white font-bold uppercase bg-blue-600 rounded-r-lg text-slate-300 active:bg-blue-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </CodeBox>
    </>
  );
};

export default Input2;
