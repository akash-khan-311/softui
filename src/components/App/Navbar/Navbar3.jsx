import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Navbar3 = () => {
  return (
    <>
      <CodeBox
        text={"Navbar With Buttons"}
        stringCode={`<nav className="px-10 py-4 bg-red-50 ">
  <div className="flex justify-between items-center gap-10 ">
    {/* logo */}
    <a href=""><h1 className="text-4xl font-bold text-gray-800">Soft UI</h1></a>
    {/* Nav Items */}
    <div className="flex justify-between gap-8">
      <ul className="flex items-center gap-x-10 text-blue-gray-900 text-lg">
        <li className="cursor-pointer hover:text-orange-600">Home</li>
        <li className="cursor-pointer hover:text-orange-600">About</li>
        <li className="cursor-pointer hover:text-orange-600">Services</li>
      </ul>
      <button className="text-white font-medium text-base inline-block outline-none  cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-4 py-2">Register</button>
      <button className="text-white font-medium text-base inline-block outline-none  cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-4 py-2">Login</button>
    </div>
  </div>
</nav>`}
      >
        <nav className="px-10 py-4 bg-red-50 ">
          <div className="flex justify-between items-center gap-10 ">
            {/* logo */}
            <a href="">
              <h1 className="text-4xl font-bold text-gray-800">Soft UI</h1>
            </a>
            {/* Nav Items */}
            <div className="flex justify-between gap-8">
              <ul className="flex items-center gap-x-10 text-blue-gray-900 text-lg">
                <li className="cursor-pointer hover:text-orange-600">Home</li>
                <li className="cursor-pointer hover:text-orange-600">About</li>
                <li className="cursor-pointer hover:text-orange-600">
                  Services
                </li>
              </ul>
              <button className="text-white font-medium text-base inline-block outline-none  cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-4 py-2">
                Register
              </button>
              <button className="text-white font-medium text-base inline-block outline-none  cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-4 py-2">
                Login
              </button>
            </div>
          </div>
        </nav>
      </CodeBox>
    </>
  );
};

export default Navbar3;
