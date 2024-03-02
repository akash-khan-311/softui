import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Checkbox5 = () => {
  return (
    <div>
      <CodeBox stringCode={`
      <div className="w-80 rounded-2xl bg-slate-900">
      <div className="flex flex-col gap-2 p-8">
        <input
          className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
          placeholder="Email"
        />
        <label className="flex cursor-pointer items-center justify-between p-1 text-white">
          Accept terms of use
          <div className="relative inline-block">
            <input
              className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300  checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              type="checkbox"
            />
            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
          </div>
        </label>
        <label className="flex cursor-pointer items-center justify-between p-1 text-white">
          Submit to newsletter
          <div className="relative inline-block">
            <input
              className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300  checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              type="checkbox"
            />
            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
          </div>
        </label>
        <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
          Save
        </button>
      </div>
    </div>
      `}>
        <div className="flex justify-center items-center">
          <div className="w-80 rounded-2xl bg-slate-900">
            <div className="flex flex-col gap-2 p-8">
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Email"
              />
              <label className="flex cursor-pointer items-center justify-between p-1 text-white">
                Accept terms of use
                <div className="relative inline-block">
                  <input
                    className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300  checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                    type="checkbox"
                  />
                  <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                </div>
              </label>
              <label className="flex cursor-pointer items-center justify-between p-1 text-white">
                Submit to newsletter
                <div className="relative inline-block">
                  <input
                    className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300  checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                    type="checkbox"
                  />
                  <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                </div>
              </label>
              <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
                Save
              </button>
            </div>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};
export default Checkbox5;
