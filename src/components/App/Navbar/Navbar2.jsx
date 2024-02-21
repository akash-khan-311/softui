import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Navbar2 = () => {
  return (
    <>
      <CodeBox
        text={"Between Nvbar"}
        stringCode={`<nav className="px-10 py-4 bg-red-50 ">
  <div className="flex justify-between gap-10 ">
    {/* logo */}
    <a href=""><h1 className="text-4xl font-bold text-gray-800">Aero UI</h1></a>
    {/* Nav Items */}
    <ul className="flex items-center gap-x-10 text-blue-gray-900 text-lg">
      <li className="cursor-pointer hover:text-orange-600">Home</li>
      <li className="cursor-pointer hover:text-orange-600">About</li>
      <li className="cursor-pointer hover:text-orange-600">Services</li>
      <li className="cursor-pointer hover:text-orange-600">Blog</li>
      <li className="cursor-pointer hover:text-orange-600">Contact</li>
    </ul>
  </div>
</nav>`}
      >
        <nav className="px-10 py-4 bg-red-50 ">
          <div className="flex justify-between gap-10 ">
            {/* logo */}
            <a href="">
              <h1 className="text-4xl font-bold text-gray-800">Aero UI</h1>
            </a>
            {/* Nav Items */}
            <ul className="flex items-center gap-x-10 text-blue-gray-900 text-lg">
              <li className="cursor-pointer hover:text-orange-600">Home</li>
              <li className="cursor-pointer hover:text-orange-600">About</li>
              <li className="cursor-pointer hover:text-orange-600">Services</li>
              <li className="cursor-pointer hover:text-orange-600">Blog</li>
              <li className="cursor-pointer hover:text-orange-600">Contact</li>
            </ul>
          </div>
        </nav>
      </CodeBox>
    </>
  );
};

export default Navbar2;
