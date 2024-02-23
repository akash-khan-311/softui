import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Form3 = () => {
  return (
    <>
      <CodeBox
        text={"Sign In Form"}
        stringCode={`<div className="flex justify-center">
  <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
    <h2 className="text-2xl font-bold pb-5">Sign In</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
        <input type="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4" placeholder="andrew@mail.com" required  />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
        <input type="password" id="password" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4" placeholder="*********" required  />
      </div>
      <div className="flex items-center justify-between mb-4">
        <button type="submit" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto">
          Submit
        </button>
        <div className="flex items-center text-sm">
          <p>New here?</p>
          <p className="underline cursor-pointer ml-1">Register</p>
        </div>
      </div>
    </form>
  </div>
</div>`}
      >
        <div className="flex justify-center">
          <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold pb-5">Sign In</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="andrew@mail.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="*********"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <button
                  type="submit"
                  className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                >
                  Submit
                </button>
                <div className="flex items-center text-sm">
                  <p>New here?</p>
                  <p className="underline cursor-pointer ml-1">Register</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Form3;
