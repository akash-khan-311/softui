import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Form1 = () => {
  return (
    <>
      <CodeBox stringCode={`
<div className="flex flex-col items-center justify-center ">
    <div className="w-[500px] bg-white rounded-lg shadow-md px-16 py-6">
      <h2 className="text-4xl text-center font-bold text-gray-900 mb-4">
        Login Form
      </h2>
      <form className="flex flex-col w-full">
        <input
          type="email"
          className="bg-gray-300 text-gray-900 border-0 rounded-md py-2 px-4 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Email"
        />
        <input
          type="password"
          className="bg-gray-300 text-gray-900 border-0 rounded-md py-2 px-4 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Password"
        /
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
        >
          Apply
        </button>
      </form>
    </div>
  </div>`}>
        <div className="flex flex-col items-center justify-center ">
          <div className="w-[500px] bg-white rounded-lg shadow-md px-16 py-6">
            <h2 className="text-4xl text-center font-bold text-gray-900 mb-4">
              Login Form
            </h2>
            <form className="flex flex-col w-full">
              <input
                type="email"
                className="bg-gray-300 text-gray-900 border-0 rounded-md py-2 px-4 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Email"
              />
              <input
                type="password"
                className="bg-gray-300 text-gray-900 border-0 rounded-md py-2 px-4 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Password"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Form1;
